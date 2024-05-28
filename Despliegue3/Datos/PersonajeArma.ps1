<#
$logPersonajeArma = "./PersonajeArmaLog.csv"

#registro
if ((Test-Path $logPersonajeArma -PathType leaf) -eq $false) {
    Add-content $logPersonajeArma -value ("PersonajeArma;Estado;Motivo;Hora")
}
#>

$siteUsers = $web.SiteUsers;
$context.Load($siteUsers);

$listaPersonajeArma = $context.web.Lists.GetByTitle("PersonajeArmas");
$itemsPersonajeArma = $listaPersonajeArma.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery());
$context.Load($listaPersonajeArma);
$context.Load($itemsPersonajeArma);

$listaPersonaje = $context.web.Lists.GetByTitle("Personajes");
$itemsPersonaje = $listaPersonaje.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery());
$context.Load($listaPersonaje);
$context.Load($itemsPersonaje);

$listaArma = $context.web.Lists.GetByTitle("Armas");
$itemsArma = $listaArma.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery());
$context.Load($listaArma);
$context.Load($itemsArma);

$context.ExecuteQuery();

$usuariosProcesados = @()

$PersonajeArmaSP = $itemsPersonajeArma | Group-Object {$_.FieldValues["LookupPersonaje"].LookupValue} -AsHashTable -AsString;
#$PersonajeArmaSP = $itemsPersonajeArma | Group-Object {$_.FieldValues["NombrePersonaje"].LookupValue} -AsHashTable -AsString;

$PersonajeSP = $itemsPersonaje | Group-Object {$_.FieldValues["Title"]} -AsHashTable -AsString;
$ArmaSP = $itemsArma | Group-Object {$_.FieldValues["Title"]} -AsHashTable -AsString;


$csvPersonajeArma = Import-Csv $csvPath"\PersonajeArma.csv" ";" -Encoding UTF8;

$csvPersonajeArma | ForEach-Object { 

    #Cargar Lookup (mas bien la lista y comprobamos si existe)
    $csvPersonaje = $null
    if($PersonajeSP[$_.NombrePersonaje] -ne $null) {
       $csvPersonaje = $PersonajeSP[$_.NombrePersonaje]
    }
    if ($csvPersonaje -eq $null) {
        write-host "El Personaje no existe" -ForegroundColor Red
        return;
    }

    write-host "Revisando $($csvPersonaje.FieldValues["Title"])- $($csvPersonaje.Id)"
    #Comprobamos si existe un personajeArma con el Personaje >=5
    if($PersonajeArmaSP.Count -eq 0){
        write-host "|-- No tiene registro en SP";
        $itemInfo  = New-Object Microsoft.SharePoint.Client.ListItemCreationInformation
        $item = $listaPersonajeArma.AddItem($itemInfo)
        $item["LookupPersonaje"] =  $csvPersonaje.Id
    }else{
        if($PersonajeArmaSP[$_."NombrePersonaje"].Count -ge 5){
            write-host "|-- Tiene 5 o mas armas";
            if ($usuariosProcesados -contains $_."NombrePersonaje") {
                Write-Host "El usuario $nombrePersonaje ya ha sido procesado. Omite la lógica de eliminación." -ForegroundColor Yellow
                return
            }
            for($i=5;$i -lt $PersonajeArmaSP[$_."NombrePersonaje"].Count;$i++){
                $listaPersonajeArma.GetItemById($PersonajeArmaSP[$_."NombrePersonaje"][$i].Id).DeleteObject();
                #$PersonajeArmaSP[$_."NombrePersonaje"][$i].DeleteObject();
                write-host "|---- Personaje-Arma eliminada" -ForegroundColor DarkMagenta
            }
            $usuariosProcesados += $_."NombrePersonaje"
            return;
        }
        else {
            $itemInfo  = New-Object Microsoft.SharePoint.Client.ListItemCreationInformation
            $item = $listaPersonajeArma.AddItem($itemInfo)
            $item["LookupPersonaje"] =  $csvPersonaje.Id
        }
    }

    #Cargar Lookup (mas bien la lista y comprobamos si existe)
    $csvArma = $null
    if($ArmaSP[$_.NombreArma] -ne $null) {
       $csvArma = $ArmaSP[$_.NombreArma]
    }
    if ($csvArma -eq $null) {
        write-host "|-- El arma no existe" -ForegroundColor Red
        return;
    }
    

    $needUpdate = $false;
    
    if ($item.FieldValues["LookupPersonaje"] -ne $csvPersonaje.Id) {
        write-host "|---- Nuevo personaje";
        $item["LookupPersonaje"] =  $csvPersonaje.Id
        $needUpdate = $true;
    }

    if ($item["LookupArma"] -ne $csvArma.Id) {
        write-host "|---- Nueva arma";
        $item["LookupArma"] =  $csvArma.Id;
        $needUpdate = $true;
    }

    if ($item["Competencia"] -ne $_."Competencia" ) {
        write-host "|---- Nueva competencia";
        $item["Competencia"] =  $_."Competencia";
        $needUpdate = $true;
    }

    if ($item["Bonificacion_Adiccional"] -ne $_."Bonificacion_Adiccional" ) {
        write-host "|---- Nueva bonificacion adiccional";
        $item["Bonificacion_Adiccional"] =  $_."Bonificacion_Adiccional";
        $needUpdate = $true;
    }


    if ($needUpdate) {
        $item.Update();
        write-host "Personaje-Arma $($csvPersonaje.FieldValues["Title"])-$($csvArma.FieldValues["Title"]) actualizada" -ForegroundColor Green

    }


}

try {
    $context.ExecuteQuery()
} catch {
    Write-Host "Se produjo un error al ejecutar la consulta: $_.Exception.Message" -ForegroundColor Red
}

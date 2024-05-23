<#
$logArma = "./ArmaLog.csv"

#registro
if ((Test-Path $logPersonaje -PathType leaf) -eq $false) {
    Add-content $logPersonaje -value ("Arma;Estado;Motivo;Hora")
}
#>


$listaArma = $context.web.Lists.GetByTitle("Armas");
$itemsArma = $listaArma.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery());
$context.Load($listaArma);
$context.Load($itemsArma);
$listaFoto = $context.web.Lists.GetByTitle("ArmaFotos");
$itemsFoto = $listaFoto.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery());
$context.Load($listaFoto);
$context.Load($itemsFoto);
$context.ExecuteQuery();

$ArmaSP = $itemsArma | Group-Object {$_.FieldValues["Title"]} -AsHashTable -AsString;
$FotoSP = $itemsFoto | Group-Object {$_.FieldValues["ID"]} -AsHashTable -AsString;


$csvArma = Import-Csv $csvPath"\Arma.csv" ";" -Encoding UTF8;

$csvArma | ForEach-Object { 

    write-host "Revisando $($_.Nombre)"
    #Comprobamos si existe una arma con el titulo
    if($ArmaSP[$_."Nombre"].Count -eq 0){
        write-host "|-- No tiene registro en SP";
        $itemInfo  = New-Object Microsoft.SharePoint.Client.ListItemCreationInformation
        $item = $listaArma.AddItem($itemInfo)
        $item["Title"] =  $_."Nombre"
    }

    else {
        if ($PersonajeSP[$_."Nombre"].Count -eq 1) {
            write-host "|-- Ya tiene registro en SP";
            $item = $ArmaSP[$_."Nombre"][0]
        }
           else {
            if($item.FieldValues["Title"] -eq $_."Nombre" ){
                write-host "|-- Hay más de un registro" -ForegroundColor Red
                return;
            }
           }
    }

    #Cargar Lookup (mas bien la lista y comprobamos si existe)
    $csvFoto = $null
    if($FotoSP[$_.LookupArmaFoto] -ne $null) {
       $csvFoto = $FotoSP[$_.LookupArmaFoto].Id
    }
    if ($csvFoto -eq $null) {
        write-host "|-- La foto no existe" -ForegroundColor Red
        return;
    }
    
    $needUpdate = $false;

    #Se compruba si son distintos los valores
    
    if ($item.FieldValues["Title"] -ne $_."Nombre" ) {
        write-host "|---- Nuevo nombre";
        $item["Title"] =  $_."Nombre"
        $needUpdate = $true;
    }

    if ($item["Arma_Ataque"] -ne $_."Arma_Ataque" ) {
        write-host "|---- Nuevo ataque";
        $item["Arma_Ataque"] =  $_."Arma_Ataque";
        $needUpdate = $true;
    }

    if ($item["Arma_Danho"] -ne $_."Arma_Danho" ) {
        write-host "|---- Nuevo daño";
        $item["Arma_Danho"] =  $_."Arma_Danho";
        $needUpdate = $true;
    }

    if ($item["Arma_Tipo"] -ne $_."Arma_Tipo" ) {
        write-host "|---- Nuevo tipo";
        $item["Arma_Tipo"] =  $_."Arma_Tipo";
        $needUpdate = $true;
    }

    if ($item["Arma_Arrojadiza"] -ne $_."Arma_Arrojadiza" ) {
        write-host "|---- Nueva arrojadiza";
        $item["Arma_Arrojadiza"] =  $_."Arma_Arrojadiza";
        $needUpdate = $true;
    }

    if ($item["Caracteristica_Sabiduria"] -ne $_."Sabiduria" ) {
        write-host "|---- Nueva sabiduria";
        $item["Caracteristica_Sabiduria"] =  $_."Sabiduria";
        $needUpdate = $true;
    }

    if ($item["Arma_Car"] -ne $_."Arma_Car" ) {
        write-host "|---- Nueva caracteristica";
        $item["Arma_Car"] =  $_."Arma_Car";
        $needUpdate = $true;
    }

    if ($item["Arma_Caracteristicas"] -ne $_."Arma_Caracteristicas" ) {
        write-host "|---- Nuevas caracteristicas";
        $item["Arma_Caracteristicas"] =  $_."Arma_Caracteristicas";
        $needUpdate = $true;
    }

    #Lookup
    if($item.FieldValues["LookupArmaFoto"].LookupId -ne $csvFoto ){
        write-host "|---- Foto:[Viejo ($($item["LookupArmaFoto"].LookupId)) Nuevo ($($csvFoto))]";
        $item["LookupArmaFoto"] = $csvFoto
        $needUpdate = $true;
    }

    <#
    if ($item["Foto"] -cne $_."Foto") {
    
        $item["Foto"] = $_."Foto";
        $needUpdate = $true;
    }
    #>


    if ($needUpdate) {
        $item.Update();
        write-host "Arma $($_."Nombre") actualizada" -ForegroundColor Green

    }


}

$context.ExecuteQuery();
<#
$logPersonaje = "./PersonajeLog.csv"

#registro
if ((Test-Path $logPersonaje -PathType leaf) -eq $false) {
    Add-content $logPersonaje -value ("Personaje;Estado;Motivo;Hora")
}
#>

$siteUsers = $web.SiteUsers;
$context.Load($siteUsers);

$listaPersonaje = $context.web.Lists.GetByTitle("Personajes");
$itemsPersonaje = $listaPersonaje.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery());
$context.Load($listaPersonaje);
$context.Load($itemsPersonaje);
$listaCampanhas = $context.web.Lists.GetByTitle("Campanhas");
$itemsCampanhas = $listaCampanhas.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery());
$context.Load($listaCampanhas);
$context.Load($itemsCampanhas);
$context.ExecuteQuery();

$PersonajeSP = $itemsPersonaje | Group-Object {$_.FieldValues["Title"]} -AsHashTable -AsString;
$campanhasSP = $itemsCampanhas | Group-Object {$_.FieldValues["Title"]} -AsHashTable -AsString;


$csvPersonaje = Import-Csv $csvPath"\Personaje.csv" ";" -Encoding UTF8;

$csvPersonaje | ForEach-Object { 

    write-host "Revisando $($_.Nombre)"
    #Comprobamos si existe una personaje con el titulo
    if($PersonajeSP.Count -eq 0){
        write-host "|-- No tiene registro en SP";
            $itemInfo  = New-Object Microsoft.SharePoint.Client.ListItemCreationInformation
            $item = $listaPersonaje.AddItem($itemInfo)
            $item["Title"] =  $_."Nombre"
    }else{
        if($PersonajeSP[$_."Nombre"].Count -eq 0){
            write-host "|-- No tiene registro en SP";
            $itemInfo  = New-Object Microsoft.SharePoint.Client.ListItemCreationInformation
            $item = $listaPersonaje.AddItem($itemInfo)
            $item["Title"] =  $_."Nombre"
        }
        else {
            if ($PersonajeSP[$_."Nombre"].Count -eq 1) {
                write-host "|-- Ya tiene registro en SP";
                $item = $PersonajeSP[$_."Nombre"][0]
            }
            else {
                if($item.FieldValues["Title"] -eq $_."Nombre" ){
                    write-host "|-- Hay más de un registro" -ForegroundColor Red
                    return;
                }
            }
        }
    }

    #Cargar Lookup (mas bien la lista y comprobamos si existe)
    $csvCampanhas = $null
    if($campanhasSP[$_.LookupCampanha] -ne $null) {
       $csvCampanhas = $campanhasSP[$_.LookupCampanha].Id
    }
    if ($csvCampanhas -eq $null) {
        write-host "|-- La Campaña no existe" -ForegroundColor Red
        return;
    }
    
    $cuenta = $_.Cuenta;
    $user = $siteUsers | Where-Object {$_.Email -eq $cuenta } 
    
    if ($user -eq $null) {
        $user = $context.Web.EnsureUser($cuenta);
        $context.Load($user);
        $context.ExecuteQuery();
    }

    $needUpdate = $false;

    #Se compruba si son distintos los valores
    if ($user -ne $null){

       if($item.FieldValues["Personaje_Usuario"].LookupId -ne $user.Id ){
            write-host "|---- Usuario:[Viejo ($($item.FieldValues["Personaje_Usuario"].LookupId)) Nuevo ($($user.Id))]";
            $item["Personaje_Usuario"] = $user.Id
            $needUpdate = $true;
        }
    }
    
    if ($item.FieldValues["Title"] -ne $_."Nombre" ) {
        write-host "|---- Nuevo nombre";
        $item["Title"] =  $_."Nombre"
        $needUpdate = $true;
    }

    if ($item["Caracteristica_Fuerza"] -ne $_."Fuerza" ) {
        write-host "|---- Nueva fuerza";
        $item["Caracteristica_Fuerza"] =  $_."Fuerza";
        $needUpdate = $true;
    }

    if ($item["Caracteristica_Destreza"] -ne $_."Destreza" ) {
        write-host "|---- Nueva destreza";
        $item["Caracteristica_Destreza"] =  $_."Destreza";
        $needUpdate = $true;
    }

    if ($item["Caracteristica_Constitucion"] -ne $_."Constitucion" ) {
        write-host "|---- Nueva constitucion";
        $item["Caracteristica_Constitucion"] =  $_."Constitucion";
        $needUpdate = $true;
    }

    if ($item["Caracteristica_Inteligencia"] -ne $_."Inteligencia" ) {
        write-host "|---- Nueva inteligencia";
        $item["Caracteristica_Inteligencia"] =  $_."Inteligencia";
        $needUpdate = $true;
    }

    if ($item["Caracteristica_Sabiduria"] -ne $_."Sabiduria" ) {
        write-host "|---- Nueva sabiduria";
        $item["Caracteristica_Sabiduria"] =  $_."Sabiduria";
        $needUpdate = $true;
    }

    if ($item["Caracteristica_Carisma"] -ne $_."Carisma" ) {
        write-host "|---- Nueva carisma";
        $item["Caracteristica_Carisma"] =  $_."Carisma";
        $needUpdate = $true;
    }

    if ($item["Bono_Competencia"] -ne $_."Competencia" ) {
        write-host "|---- Nueva competencia";
        $item["Bono_Competencia"] =  $_."Competencia";
        $needUpdate = $true;
    }

    #Lookup
    if($item.FieldValues["LookupCampanha"].LookupId -ne $csvCampanhas ){
        write-host "|---- Campaña:[Viejo ($($item["LookupCampanha"].LookupId)) Nuevo ($($csvCampanhas))]";
        $item["LookupCampanha"] = $csvCampanhas
        $needUpdate = $true;
    }

    
    $url = $_."UrlFoto"
    if($item.FieldValues["Personaje_Foto"].Url -ne $url ){
        write-host "|---- Foto:[Viejo ($($item.FieldValues["Personaje_Foto"].Url)) Nuevo ($($url))]";
        $item["Personaje_Foto"] = $url
        $needUpdate = $true;
    }
    


    if ($needUpdate) {
        $item.Update();
        write-host "Personaje $($_."Nombre") actualizada" -ForegroundColor Green

    }


}

$context.ExecuteQuery();
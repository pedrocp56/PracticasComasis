<#
$logArma = "./ArmaLog.csv"

#registro
if ((Test-Path $logArma -PathType leaf) -eq $false) {
    Add-content $logArma -value ("Arma;Estado;Motivo;Hora")
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
$FotoSP = $itemsFoto | Group-Object {$_.FieldValues["FileLeafRef"]} -AsHashTable -AsString;


$csvArma = Import-Csv $csvPath"\Arma.csv" ";" -Encoding UTF8;

$csvArma | ForEach-Object { 

    write-host "Revisando $($_.Nombre)"
    #Comprobamos si existe una arma con el titulo
    if($ArmaSP.Count -eq 0){
        write-host "|-- No tiene registro en SP";
        $itemInfo  = New-Object Microsoft.SharePoint.Client.ListItemCreationInformation
        $item = $listaArma.AddItem($itemInfo)
        $item["Title"] =  $_."Nombre"
    }else{
        if($ArmaSP[$_."Nombre"].Count -eq 0){
            write-host "|-- No tiene registro en SP";
            $itemInfo  = New-Object Microsoft.SharePoint.Client.ListItemCreationInformation
            $item = $listaArma.AddItem($itemInfo)
            $item["Title"] =  $_."Nombre"
        }
        else {
            if ($ArmaSP[$_."Nombre"].Count -eq 1) {
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
    }

    #Cargar Lookup (mas bien la biblioteca y comprobamos si existe)
    $csvFoto = $null
    if($FotoSP[$_.LookupArmaFoto] -ne $null) {
       $csvFoto = $FotoSP[$_.LookupArmaFoto].FieldValues["FileRef"];
    }
    if ($csvFoto -eq $null) {
        write-host "|-- La foto no existe" -ForegroundColor Red
        return;
    }
    
    $needUpdate = $false;

    #Se compruba si son distintos los valores
    
    if ($item.FieldValues["Title"] -ne $_."Nombre" ) {
        write-host "|---- Nuevo nombre:[Viejo ($($item.FieldValues["Title"])) Nuevo ($($_."Nombre"))]";
        $item["Title"] =  $_."Nombre"
        $needUpdate = $true;
    }

    if ($item["Arma_Ataque"] -ne $_."Arma_Ataque" ) {
        write-host "|---- Nuevo ataque:[Viejo ($($item.FieldValues["Arma_Ataque"])) Nuevo ($($_."Arma_Ataque"))]";
        $item["Arma_Ataque"] =  $_."Arma_Ataque";
        $needUpdate = $true;
    }

    if ($item["Arma_Danho"] -ne $_."Arma_Danho" ) {
        write-host "|---- Nuevo daño:[Viejo ($($item.FieldValues["Arma_Danho"])) Nuevo ($($_."Arma_Danho"))]";
        $item["Arma_Danho"] =  $_."Arma_Danho";
        $needUpdate = $true;
    }

    # Convertir Arma_Tipo en un array para selección múltiple
    # Si metes vorios valores siempre entra
    $armaTipoArray = $_."Arma_Tipo" -split ",\s*"
    if ($item.FieldValues["Arma_Tipo"] -ne $armaTipoArray) {
        write-host "|---- Nuevo tipo:[Viejo ($($item.FieldValues["Arma_Tipo"])) Nuevo ($($armaTipoArray))]";
        $item["Arma_Tipo"] =  $armaTipoArray;
        $needUpdate = $true;
    }

    # Convertir Arma_Arrojadiza a booleano y comparar adecuadamente
    $arrojadizaValue = [System.Convert]::ToBoolean($_."Arma_Arrojadiza")
    if ($item.FieldValues["Arma_Arrojadiza"] -ne $arrojadizaValue ) {
        write-host "|---- Nueva arrojadiza:[Viejo ($($item.FieldValues["Arma_Arrojadiza"])) Nuevo ($($arrojadizaValue))]";
        $item["Arma_Arrojadiza"] = $arrojadizaValue;
        $needUpdate = $true;
    }

    if ($item["Arma_Car"] -ne $_."Arma_Car" ) {
        write-host "|---- Nueva caracteristica:[Viejo ($($item.FieldValues["Arma_Car"])) Nuevo ($($_."Arma_Car"))]";
        $item["Arma_Car"] =  $_."Arma_Car";
        $needUpdate = $true;
    }

    if ($item["Arma_Caracteristicas"] -ne $_."Arma_Caracteristicas" ) {
        write-host "|---- Nuevas caracteristicas:[Viejo ($($item.FieldValues["Arma_Caracteristicas"])) Nuevo ($($_."Arma_Caracteristicas"))]";
        $item["Arma_Caracteristicas"] =  $_."Arma_Caracteristicas";
        $needUpdate = $true;
    }

    $url = "https://onlinecomasis.sharepoint.com$($csvFoto)"
    if($item.FieldValues["Arma_Foto"].Url -ne $url ){
        write-host "|---- Foto:[Viejo ($($item.FieldValues["Arma_Foto"].Url)) Nuevo ($($url))]";
        $item["Arma_Foto"] = $url
        $needUpdate = $true;
    }



    if ($needUpdate) {
        $item.Update();
        write-host "Arma $($_."Nombre") actualizada" -ForegroundColor Green

    }


}

$context.ExecuteQuery();
<#
$logCampanhas = "./Campa�asLog.csv"

#registro
if ((Test-Path $logCampa�as -PathType leaf) -eq $false) {
    Add-content $logCampa�as -value ("Campa�a;Estado;Motivo;Hora")
}
#>

$siteUsers = $web.SiteUsers;
$context.Load($siteUsers);

$listaCampanhas = $context.web.Lists.GetByTitle("Campanhas");
$itemsCampanhas = $listaCampanhas.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery());
$context.Load($listaCampanhas);
$context.Load($itemsCampanhas);
$context.ExecuteQuery();

$campanhasSP = $itemsCampanhas | Group-Object {$_.FieldValues["Title"]} -AsHashTable -AsString;

$csvCampanhas = Import-Csv $csvPath"\Campanha.csv" ";" -Encoding UTF8;

$csvCampanhas | ForEach-Object { 

    write-host "Revisando $($_.Titulo)"
    #Comprobamos si existe una campa�a con el titulo
    if($campanhasSP.Count -eq 0){
        write-host "|-- No tiene registro en SP";
        $itemInfo  = New-Object Microsoft.SharePoint.Client.ListItemCreationInformation
        $item = $listaCampanhas.AddItem($itemInfo)
        $item["Title"] =  $_."Titulo"
    }else{ 
        if($campanhasSP[$_."Titulo"].Count -eq 0){
            write-host "|-- No tiene registro en SP";
            $itemInfo  = New-Object Microsoft.SharePoint.Client.ListItemCreationInformation
            $item = $listaCampanhas.AddItem($itemInfo)
            $item["Title"] =  $_."Titulo"
        }

        else {
            if ($campanhasSP[$_."Titulo"].Count -eq 1) {
                write-host "|-- Ya tiene registro en SP";
                $item = $campanhasSP[$_."Titulo"][0]
            }
                else {
                    if($item.FieldValues["Title"] -eq $_."Titulo" ){
                        write-host "|-- Hay m�s de un registro" -ForegroundColor Red
                        return;
                    }
                }
        }
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

       if($item.FieldValues["Author"].LookupId -ne $user.Id ){
            write-host "|---- Autor:[Viejo ($($item.FieldValues["Author"].LookupId)) Nuevo ($($user.Id))]";
            $item["Author"] = $user.Id
            $needUpdate = $true;
        }
    }
    
    if ($item.FieldValues["Title"] -ne $_."Titulo" ) {
        write-host "|---- Nuevo t�tulo";
        $item["Title"] =  $_."Titulo"
        $needUpdate = $true;
    }

    if ($item["Campanha_Descripcion"] -ne $_."Descripcion" ) {
        write-host "|---- Nueva descripci�n";
        $item["Campanha_Descripcion"] =  $_."Descripcion";
        $needUpdate = $true;
    }
    <#
    if ($item["Campanha_Foto"] -cne $_."Foto") {
    
        $item["Campanha_Foto"] = $_."Foto";
        $needUpdate = $true;
    }
    #>

    $fechacsv = Get-Date $_."Fecha";
    $fechasp = $nul;
    if ($null -ne $item.FieldValues["Campanha_Fecha"]) {
        $fechasp = Get-Date $item.FieldValues["Campanha_Fecha"]
    }

    if ($fechasp -eq $null -or $fechacsv.toString("u") -ne  $fechasp.toString("u")) {
        write-host "|---- Nueva fecha";
        $item["Campanha_Fecha"] = $fechacsv.toString("u");
        $needUpdate = $true;
    }

    if ($needUpdate) {
        $item.Update();
        write-host "Campa�a $($_."Titulo") actualizada" -ForegroundColor Green

    }


}

$context.ExecuteQuery();
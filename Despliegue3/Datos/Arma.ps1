$logArmas = "./ArmasLog.csv"


if ((Test-Path $logArmas -PathType leaf) -eq $false) {
    Add-content $logArmas -value ("Trabajador;Estado;Motivo;Hora")
}

$siteUsers = $web.SiteUsers;
$context.Load($siteUsers);

$listaArmas = $context.web.Lists.GetByTitle("Armas");
$itemsArmas = $listaArmas.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery());
$context.Load($listaArmas);
$context.Load($itemsArmas);
$context.ExecuteQuery();

 #aqui se carga un user
$armasSP = $itemsArmas | Group-Object {$_.FieldValues["TFC_Usuario"].Email} -AsHashTable -AsString;

$csvArmas = Import-Csv $csvPath"\Armas.csv" ";" -Encoding UTF8;


$csvArmas | ForEach-Object { 


    write-host $_.Cuenta
    $cuenta = $_.Cuenta;
    $user = $siteUsers | Where-Object {$_.Email -eq $cuenta } 
    
    if ($user -eq $null) {
        $user = $context.Web.EnsureUser($cuenta);
        $context.Load($user);
        $context.ExecuteQuery();
    }

    #comprobamos si el usuario ya tiene registro en la lista de trabajadores
    if ($trabajadoresSP[$_.Cuenta] -eq $null) {
        write-host $_.Cuenta " no tiene registro en SP";
        $itemInfo  = New-Object Microsoft.SharePoint.Client.ListItemCreationInformation
        $item = $listaTrabajadores.AddItem($itemInfo)
        $item["TFC_Usuario"] = $user.Id;
    }


    else {
        if ($trabajadoresSP[$_.Cuenta].Count -eq 1) {
            write-host $_.Cuenta " si tiene registro en SP";
            $item = $trabajadoresSP[$_.Cuenta][0]
        }
           else {
            write-host "hay más de un registro para este usuario" -ForegroundColor Red
            return;
           }
    
    }

    $needUpdate = $false;

    if ($item.FieldValues["Title"] -ne $user.Title ) {
        
        $item["Title"] =  $user.Title
        $needUpdate = $true;
    }

    if ($item["TFC_Direccion"] -ne $_."Direccion" ) {
  
        $item["TFC_Direccion"] =  $_."Direccion";
        $needUpdate = $true;
    }

    if ($item["TFC_Telefono"] -cne $_."NumTelefono") {
    
        $item["TFC_Telefono"] = $_."NumTelefono";
        $needUpdate = $true;
    }


    if ($item["TFC_Cargo"] -cne $_."Cargo") {
    
        $item["TFC_Cargo"] = $_."Cargo";
        $needUpdate = $true;
    }
    if ($item["TFC_Correo"] -cne $_."Correo") {
    
        $item["TFC_Correo"] = $_."Correo";
        $needUpdate = $true;
    }

    $fechacsv = Get-Date $_."FechaNacimiento";
    $fechasp = $null;
    if ($null -ne $item.FieldValues["TFC_FechaNacimiento"]) {
        $fechasp = Get-Date $item.FieldValues["TFC_FechaNacimiento"]
    }

    if ($fechasp -eq $null -or $fechacsv.toString("u") -ne  $fechasp.toString("u")) {
        $item["TFC_FechaNacimiento"] = $fechacsv.toString("u");
        $needUpdate = $true;
    }

    $fechaAltacsv = Get-Date $_."FechaAlta";
    $fechaAltasp = $null;
    if ($null -ne $item.FieldValues["TFC_FechaAlta"]) {
        $fechaAltasp = Get-Date $item.FieldValues["TFC_FechaAlta"]
    }

    if ($fechaAltasp -eq $null -or $fechaAltacsv.toString("u") -ne  $fechaAltasp.toString("u")) {
        $item["TFC_FechaAlta"] = $fechaAltacsv.toString("u");
        $needUpdate = $true;
    }

    if ($needUpdate) {
        $item.Update();
    }


}

$context.ExecuteQuery();
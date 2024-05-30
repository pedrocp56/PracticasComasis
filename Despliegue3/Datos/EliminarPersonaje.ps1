$siteUsers = $web.SiteUsers;
$context.Load($siteUsers);

$listaPersonaje = $context.web.Lists.GetByTitle("Personajes");
$itemsPersonaje = $listaPersonaje.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery());
$context.Load($listaPersonaje);
$context.Load($itemsPersonaje);

$context.ExecuteQuery();

$emailUsuario = "eliasqueijeiro@comasis.com";

$user = $siteUsers | Where-Object {$_.Email -eq $emailUsuario } 
    
if ($user -eq $null) {
    $user = $context.Web.EnsureUser($emailUsuario);
    $context.Load($user);
    $context.ExecuteQuery();
}
write-host "User:$($user.EMail)" -ForegroundColor Green

write-host "Items:$($itemsPersonaje.Count)" -ForegroundColor Green

for ($i = 0; $i -lt $itemsPersonaje.Count; $i++) {
    $item = $itemsPersonaje[$i]
    write-host $item.FieldValues["Title"]
    
    if ($item.FieldValues["Personaje_Usuario"].LookupId -eq $user.Id -or $emailUsuario -eq "Todos" ) {
        $listaPersonaje.GetItemById($item.Id).DeleteObject()
        write-host "|---- Campaña eliminada" -ForegroundColor DarkMagenta
    }
}

$context.ExecuteQuery();
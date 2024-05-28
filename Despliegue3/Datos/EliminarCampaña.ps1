$siteUsers = $web.SiteUsers;
$context.Load($siteUsers);

$listaCampanhas = $context.web.Lists.GetByTitle("Campanhas");
$itemsCampanhas = $listaCampanhas.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery());
$context.Load($listaCampanhas);
$context.Load($itemsCampanhas);
$context.ExecuteQuery();

$emailUsuario = "eliasqueijeiro@comasis.com";

$user = $siteUsers | Where-Object {$_.Email -eq $emailUsuario } 
    
if ($user -eq $null) {
    $user = $context.Web.EnsureUser($emailUsuario);
    $context.Load($user);
    $context.ExecuteQuery();
}
write-host "User:$($user.EMail)" -ForegroundColor Green

write-host "Items:$($itemsCampanhas.Count)" -ForegroundColor Green

for ($i = 0; $i -lt $itemsCampanhas.Count; $i++) {
    $item = $itemsCampanhas[$i]
    write-host $item.FieldValues["Title"]
    
    if ($item.FieldValues["Author"].LookupId -eq $user.Id -or $emailUsuario -eq "Todos" ) {
        $listaCampanhas.GetItemById($item.Id).DeleteObject()
        write-host "|---- Campaña eliminada" -ForegroundColor DarkMagenta
    }
}

$context.ExecuteQuery();
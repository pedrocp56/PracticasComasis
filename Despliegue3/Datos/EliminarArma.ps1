$listaArma = $context.web.Lists.GetByTitle("Armas");
$itemsArma = $listaArma.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery());
$context.Load($listaArma);
$context.Load($itemsArma);

$context.ExecuteQuery();

write-host "Items:$($itemsArma.Count)" -ForegroundColor Green

for ($i = 0; $i -lt $itemsArma.Count; $i++) {
    $item = $itemsArma[$i]
    write-host $item.FieldValues["Title"]
  
    $listaArma.GetItemById($item.Id).DeleteObject()
    write-host "|---- Arma eliminada" -ForegroundColor DarkMagenta
}

$context.ExecuteQuery();
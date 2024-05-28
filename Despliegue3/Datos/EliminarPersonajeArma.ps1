$listaPersonajeArma = $context.web.Lists.GetByTitle("PersonajeArmas");
$itemsPersonajeArma = $listaPersonajeArma.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery());
$context.Load($listaPersonajeArma);
$context.Load($itemsPersonajeArma);


$context.ExecuteQuery();

$nombrePersonaje = "Todos";

write-host "Items:$($itemsPersonajeArma.Count)" -ForegroundColor Green

for ($i = 0; $i -lt $itemsPersonajeArma.Count; $i++) {
    $item = $itemsPersonajeArma[$i]
    write-host $item.FieldValues["LookupPersonaje"].LookupValue
    
    if ($item.FieldValues["LookupPersonaje"].LookupValue -eq $nombrePersonaje -or $nombrePersonaje -eq "Todos" ) {
        $listaPersonajeArma.GetItemById($item.Id).DeleteObject()
        write-host "|---- Personaje-Arma eliminada" -ForegroundColor DarkMagenta
    }
}

$context.ExecuteQuery()
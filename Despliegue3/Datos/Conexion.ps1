$absolutePath = "C:\Users\PedroCerredelo\Documents\Trabajo\TFC\Despliegue3"
$csvPath = $absolutePath + "/Datos/csv" 
$siteUrl = "https://onlinecomasis.sharepoint.com/sites/Pedro"

Connect-PnPOnline -Url $siteUrl -UseWebLogin -WarningAction ignore

$context = Get-PnpContext
$web = $context.Web;
$context.Load($web);
$context.ExecuteQuery();


$lists = $web.Lists;
$context.Load($lists);
$context.ExecuteQuery();
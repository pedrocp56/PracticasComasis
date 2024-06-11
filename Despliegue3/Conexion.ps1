#hay que tener instalada librería pnp Install-Module PnP.PowerShell
#https://github.com/pnp/powershell

#$siteUrl = "https://onlinecomasis.sharepoint.com/sites/Pedro"
$siteUrl = "https://eqcdevelopment.sharepoint.com/sites/Pedro"

Connect-PnPOnline -Url $siteUrl -UseWebLogin -WarningAction ignore

$context = Get-PnpContext
$web = $context.Web;
$context.Load($web);
$context.ExecuteQuery();


$lists = $web.Lists;
$context.Load($lists);
$context.ExecuteQuery();
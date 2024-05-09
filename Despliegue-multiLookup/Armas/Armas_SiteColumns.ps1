$fields = $web.Fields;
$context.Load($fields);
$context.ExecuteQuery();


#[guid]::NewGuid()
$fieldsArray = @();

#Indexed="True"

$fieldsArray += '<Field ID="{895e4672-e15b-4c40-bc6f-d752e02dbbd9}" 
                Name="Arma_Ataque"
                DisplayName="Ataque del arma" 
                Type="Number"
                Required="TRUE"
                Indexed="FALSE"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';


$fieldsArray += '<Field ID="{61808313-fe99-4abe-90a0-2c080db1bdea}" 
                Name="Arma_Danho"
                DisplayName="Daño del arma" 
                Type="Text" 
                Required="TRUE"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{469ae8bf-2dfa-4bfd-b189-361b7afb6dda}" 
                Name="Arma_Tipo" 
                DisplayName="Tipo de daño" 
                Type="MultiChoice"
                Required="TRUE"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                    <CHOICES>
                        <CHOICE>Contundente</CHOICE>
                        <CHOICE>Cortante</CHOICE>
                        <CHOICE>Frío</CHOICE>
                        <CHOICE>Fuego</CHOICE>
                        <CHOICE>Fuerza</CHOICE>
                        <CHOICE>Necrótico</CHOICE>
                        <CHOICE>Perforante</CHOICE>
                        <CHOICE>Psíquico</CHOICE>
                        <CHOICE>Radiante</CHOICE>
                        <CHOICE>Relámpago</CHOICE>
                        <CHOICE>Trueno</CHOICE>
                        <CHOICE>Veneno</CHOICE>
                    </CHOICES>
                </Field>';

$fieldsArray += '<Field ID="{1bd9ae3f-5b95-4c2a-b38d-0f58acdca398}" 
                Name="Arma_Arrojadiza"
                DisplayName="Arma arrojadiza" 
                Type="Boolean"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{34152d4b-1ed6-40b8-b575-dcc43f482c51}" 
                Name="Arma_Car"
                DisplayName="Caracteristica de ataque" 
                Type="Choice" 
                Required= "True"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                    <CHOICES>
                        <CHOICE>Fuerza</CHOICE>
                        <CHOICE>Destreza</CHOICE>
                        <CHOICE>Constitución</CHOICE>
                        <CHOICE>Inteligencia</CHOICE>
                        <CHOICE>Sabiduria</CHOICE>
                        <CHOICE>Carisma</CHOICE>
                    </CHOICES>
                </Field>';

$fieldsArray += '<Field ID="{7f16e1ce-add0-4141-9308-3cd7292869b6}" 
                Name="Arma_Caracteristicas"
                DisplayName="Caracteristicas" 
                Type="Note" 
                Multiline="True"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';



$fieldOption = [Microsoft.SharePoint.Client.AddFieldOptions]::DefaultValue;

foreach ($xml in $fieldsArray) {

    write-host $xml
    $field = $fields.AddFieldAsXml($xml, $true, $fieldOption); 
    $context.Load($field);
    $context.ExecuteQuery();
}


write-host "columnas ok" -ForegroundColor Green

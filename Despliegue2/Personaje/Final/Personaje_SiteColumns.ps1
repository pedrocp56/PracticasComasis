$fields = $web.Fields;
$context.Load($fields);
$context.ExecuteQuery();


#[guid]::NewGuid()
$fieldsArray = @();

$fieldsArray += '<Field ID="{6af37ec8-3e29-443c-bfc0-809a1f424917}" 
                Name="Personaje_Usuario"
                DisplayName="Nombre del jugador" 
                Type="User"
                Required="TRUE"
                Indexed="FALSE"
                Group="FichaPersonaje" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{6333a468-61c3-442b-b4e6-5518a71983cf}" 
                Name="Caracteristica_Fuerza"
                DisplayName="Fuerza" 
                Type="Number"
                Required="TRUE"
                Min="1"
                Max="30"
                Indexed="False"
                Group="FichaPersonaje" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{d74093cf-a792-4f84-b7d1-d4aa9726a8ad}" 
                Name="Caracteristica_Destreza"
                DisplayName="Destreza" 
                Type="Number"
                Required="TRUE"
                Min="1"
                Max="30"
                Indexed="FALSE"
                Group="FichaPersonaje" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';


$fieldsArray += '<Field ID="{243ccb66-913a-488f-be49-c12eac1a2680}" 
                Name="Caracteristica_Constitución"
                DisplayName="Constitución" 
                Type="Number"
                Required="TRUE"
                Min="1"
                Max="30"
                Group="FichaPersonaje" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{1db2512c-3b68-4428-8363-2a91f168ff9d}" 
                Name="Caracteristica_Inteligencia" 
                DisplayName="Inteligencia" 
                Type="Number"
                Required="TRUE"
                Min="1"
                Max="30"
                Group="FichaPersonaje" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{2ee98c77-7416-4ff7-b36e-680bb210f5db}" 
                Name="Caracteristica_Sabiduria"
                DisplayName="Sabiduria" 
                Type="Number"
                Required="TRUE"
                Min="1"
                Max="30"
                Group="FichaPersonaje" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{941bc503-7761-4701-87ca-65a7bd1fb132}" 
                Name="Caracteristica_Carisma"
                DisplayName="Carisma" 
                Type="Number"
                Required="TRUE"
                Min="1"
                Max="30"
                Group="FichaPersonaje" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{042288df-7c62-45a3-9fca-4c2e2cccbbb4}" 
                Name="Bono_Competencia" 
                DisplayName="Bono de competencia"  
                Type="Number"
                Min="2"
                Max="6" 
                Required="True"
                Group="FichaPersonaje" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{feb0ecd8-6a15-423d-a205-610964d80f4b}" 
                Name="Campanha" 
                DisplayName="Campanha"  
                Type="Text"
                Group="FichaPersonaje" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';


$fieldsArray += '<Field ID="{fd08eed1-b8ed-4265-9fb1-15fa3dc08d7a}" 
                Name="Personaje_Foto" 
                DisplayName="Foto del personaje"  
                Type="URL" 
                Format="Image"
                Group="FichaPersonaje" 
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

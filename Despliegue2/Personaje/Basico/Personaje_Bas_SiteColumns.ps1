$fields = $web.Fields;
$context.Load($fields);
$context.ExecuteQuery();


#[guid]::NewGuid()
$fieldsArray = @();

$fieldsArray += '<Field ID="{bfe93e7f-7e6f-4732-b198-36dabd6deb81}" 
                Name="Personaje_Nombre"
                DisplayName="Nombre del personaje" 
                Type="Text"
                Required="TRUE"
                EnforceUniqueValues="TRUE"
                Indexed="True"
                Group="FichaPersonajeBas" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{6af37ec8-3e29-443c-bfc0-809a1f424917}" 
                Name="Personaje_Usuario"
                DisplayName="Nombre del jugador" 
                Type="User"
                Required="TRUE"
                Indexed="FALSE"
                Group="FichaPersonajeBas" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';



$fieldsArray += '<Field ID="{d6656c79-a012-46d6-a0a9-21dfa56497ff}" 
                Name="Personaje_Clase"
                DisplayName="Clase" 
                Type="Choice" 
                Required="TRUE"
                Group="FichaPersonajeBas" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                <CHOICES>
                <CHOICE>Bárbaro</CHOICE>
                <CHOICE>Bardo</CHOICE>
                <CHOICE>Brujo</CHOICE>
                <CHOICE>Clérigo</CHOICE>
                <CHOICE>Druida</CHOICE>
                <CHOICE>Explorador</CHOICE>
                <CHOICE>Guerrero</CHOICE>
                <CHOICE>Hechicero</CHOICE>
                <CHOICE>Mago</CHOICE>
                <CHOICE>Monje</CHOICE>
                <CHOICE>Paladín</CHOICE>
                <CHOICE>Pícaro</CHOICE>
                </CHOICES>
                </Field>';

$fieldsArray += '<Field ID="{96201715-0d2c-4ad6-869a-b9bbbd6c5845}" 
                Name="Personaje_Nivel" 
                DisplayName="Nivel del personaje" 
                Type="Number"
                Required="TRUE"
                Min="1"
                Max="20"
                Group="FichaPersonajeBas" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{d5b20817-7668-459b-b813-1f775afe7215}" 
                Name="Personaje_Raza"
                DisplayName="Raza" 
                Type="Choice" 
                Required="TRUE"
                Group="FichaPersonajeBas" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                <CHOICES>
                <CHOICE>Dracónidos</CHOICE>
                <CHOICE>Elfos</CHOICE>
                <CHOICE>Enanos</CHOICE>
                <CHOICE>Gnomos</CHOICE>
                <CHOICE>Humanos</CHOICE>
                <CHOICE>Medianos</CHOICE>
                <CHOICE>Semielfos</CHOICE>
                <CHOICE>Semiorcos</CHOICE>
                <CHOICE>Tiflin</CHOICE>
                </CHOICES>
                </Field>';

$fieldsArray += '<Field ID="{be50cfbe-7bfe-438f-b2ce-a3f2e55b1f21}" 
                Name="Personaje_Alinamiento"
                DisplayName="Alinamiento" 
                Type="Choice" 
                Required="TRUE"
                Group="FichaPersonajeBas" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                <CHOICES>
                <CHOICE>Legal bueno</CHOICE>
                <CHOICE>Legal neutral</CHOICE>
                <CHOICE>Legal malvado</CHOICE>
                <CHOICE>Neutral bueno</CHOICE>
                <CHOICE>Neutral</CHOICE>
                <CHOICE>Neutral malvado</CHOICE>
                <CHOICE>Caótico bueno</CHOICE>
                <CHOICE>Caótico neutral</CHOICE>
                <CHOICE>Caótico malvado</CHOICE>
                </CHOICES>
                </Field>';


$backgroundColor = "=if (@currentField == 'Vivo', '#498205',if (@currentField == 'Moribundo', '#CA5010',if (@currentField == 'Muerto', '#D13438','#000000')))"
 
$formatter = '{&quot;$schema&quot;:&quot;https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json&quot;,&quot;elmType&quot;:&quot;div&quot;,&quot;style&quot;:{&quot;padding-left&quot;:&quot;4px&quot;,&quot;color&quot;:&quot;#fff&quot;,&quot;background-color&quot;:&quot;' + $backgroundColor+'&quot;},&quot;txtContent&quot;:&quot;@currentField&quot;}'
 

$fieldsArray += '<Field ID="{a4b40906-ec54-4431-97d1-1019aa1ad46c}" 
                Name="Personaje_Estado" 
                DisplayName="Estado del personaje"  
                Type="Choice" 
                Required="TRUE"
                Group="FichaPersonajeBas" 
                CustomFormatter="' + $formatter + '"
                xmlns="http://schemas.microsoft.com/sharepoint/">
                <CHOICES>
                <CHOICE>Vivo</CHOICE>
                <CHOICE>Moribundo</CHOICE>
                <CHOICE>Muerto</CHOICE>
                </CHOICES>
                </Field>';

$fieldsArray += '<Field ID="{b4048ca2-141f-4eed-97f1-b14a2af56cbd}" 
                Name="Personaje_Inspiracion" 
                DisplayName="Inspiración"  
                Type="Boolean" 
                Group="FichaPersonajeBas" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{2e62e7d5-e113-4524-8e9e-dd4afa8e9177}" 
                Name="Personaje_Edad" 
                DisplayName="Edad"  
                Type="Number" 
                Group="FichaPersonajeBas" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{d2351415-b9e7-48a1-9b28-9458ecf767d8}" 
                Name="Personaje_Altura" 
                DisplayName="Altura (metros)"  
                Type="Number" 
                Group="FichaPersonajeBas" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{23ecee20-9590-4055-87be-1f401e666dc8}" 
                Name="Personaje_Peso" 
                DisplayName="Peso (Kg)"  
                Type="Number" 
                Group="FichaPersonajeBas" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{41a7fcf2-291d-40af-b82b-6b3bee54fe02}" 
                Name="Personaje_Ojos" 
                DisplayName="Color de ojos"  
                Type="Text" 
                Group="FichaPersonajeBas" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{6ae3e787-3ed2-461d-895d-e90c886ecde7}" 
                Name="Personaje_Piel" 
                DisplayName="Color de piel"  
                Type="Text" 
                Group="FichaPersonajeBas" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{0c8a8843-7495-4fef-98db-3cd516f26a55}" 
                Name="Personaje_Pelo" 
                DisplayName="Forma y color de pelo"  
                Type="Text" 
                Group="FichaPersonajeBas" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{fd08eed1-b8ed-4265-9fb1-15fa3dc08d7a}" 
                Name="Personaje_Foto" 
                DisplayName="Foto del personaje"  
                Type="URL" 
                Format="Image"
                Group="FichaPersonajeBas" 
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

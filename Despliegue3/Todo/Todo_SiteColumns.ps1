$fields = $web.Fields;
$context.Load($fields);
$context.ExecuteQuery();


#[guid]::NewGuid()
$fieldsArray = @();

#Indexed="True"

####################  Campaña  ####################

$fieldsArray += '<Field ID="{e1e12a32-5ca9-4ee6-8df0-a2c75b68032f}" 
                Name="Campanha_Descripcion"
                DisplayName="Descripcion de la campaña" 
                Type="Note" 
                Group="FichaCampaña" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{9a1f7e3e-71c5-44bd-aa78-e5e334867dae}" 
                Name="Campanha_Fecha" 
                DisplayName="Fecha proxima sesión" 
                Type="DateTime"
                Group="FichaCampaña" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{a66cb79d-3de8-425e-a0fa-1f639f954549}" 
                Name="Campanha_Foto" 
                DisplayName="Foto de la campaña"  
                Type="URL" 
                Format="Image"
                Group="FichaCampaña" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

####################  Personaje  ####################

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
                Default="10"
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
                Default="10"
                Min="1"
                Max="30"
                Indexed="FALSE"
                Group="FichaPersonaje" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';


$fieldsArray += '<Field ID="{243ccb66-913a-488f-be49-c12eac1a2680}" 
                Name="Caracteristica_Constitucion"
                DisplayName="Constitución" 
                Type="Number"
                Required="TRUE"
                Default="10"
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
                Default="10"
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
                Default="10"
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

$fieldsArray += '<Field ID="{fd08eed1-b8ed-4265-9fb1-15fa3dc08d7a}" 
                Name="Personaje_Foto" 
                DisplayName="Foto del personaje"  
                Type="URL" 
                Format="Image"
                Group="FichaPersonaje" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

####################  Arma Foto  ####################


####################  Arma  ####################

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
                Type="Text" 
                Required="TRUE"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{7f16e1ce-add0-4141-9308-3cd7292869b6}" 
                Name="Arma_Caracteristicas"
                DisplayName="Caracteristicas" 
                Type="Note" 
                Multiline="True"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

####################  Personaje Arma  ####################

$fieldsArray += '<Field ID="{07e1d78b-1b11-4f50-87be-b189117859b7}" 
                Name="Competencia"
                DisplayName="Competencia" 
                Type="Boolean"
                Group="PersonajeArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{2e87fc3f-0838-40b0-a970-3c24f08b54d3}" 
                Name="Bonificacion_Adiccional"
                DisplayName="Bonificacion adiccional" 
                Type="Number"
                Required="TRUE"
                Indexed="FALSE"
                Group="PersonajeArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

<#
$fieldsArray += '<Field ID="{daaa8530-6214-4de6-89fe-10f1cfc8e522}" 
                Name="Ataque_Total"
                DisplayName="Ataque total" 
                Type="Number"
                Required="TRUE"
                Indexed="FALSE"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';
#>

$fieldOption = [Microsoft.SharePoint.Client.AddFieldOptions]::DefaultValue;

foreach ($xml in $fieldsArray) {

    write-host $xml
    $field = $fields.AddFieldAsXml($xml, $true, $fieldOption); 
    $context.Load($field);
    $context.ExecuteQuery();
}


write-host "columnas ok" -ForegroundColor Green

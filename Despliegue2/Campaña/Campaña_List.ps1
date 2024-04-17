﻿#creacion de la region de la lista

$listTitle = "Armas"
$listDescription = "Lista Arma Informacion"
$listTemplate = 100

#añadir tipos de contenido
$tipodecontenido = "ArmaInfo"

$lci = New-Object Microsoft.SharePoint.Client.ListCreationInformation
$lci.title = $listTitle
$lci.description = $listDescription
$lci.TemplateType = $listTemplate

$list = $context.web.lists.add($lci)
$context.load($list)

    try{
        $context.executeQuery()
        write-host "List $($listTitle) created" -foregroundcolor green
    }
    catch{
        write-host "ERROR: $($_.Exception.Message)" -foregroundcolor red
    }  


    $list.ContentTypesEnabled = $true
    $list.EnableFolderCreation = $false;
    #$list.OnQuickLaunch = $false;
    #$list.Hidden = $true;
    $list.Update();



#añadir/eliminar tipos de contenidos
$contentTypes = $web.ContentTypes;

    $context.Load($contentTypes);

    $context.ExecuteQuery();



    $contentType = $contentTypes | Where-Object {$_.Name -eq $tipodecontenido} 
   
    if ($contentType -ne $null) {
        $AddCT = $list.ContentTypes.AddExistingContentType($contentType)
        $tiposenlista = $list.ContentTypes;
        $context.Load($list.ContentTypes);
        $context.ExecuteQuery();

        #eliminar tipos de contenido
        $tiposBorrar = New-Object System.Collections.ArrayList($null);

        foreach ($tipoenlista in $list.ContentTypes) {
            if ($tipoenlista.Name -eq "Elemento") {
                $dontshow = $tiposBorrar.Add($tipoenlista);
            
            }
        }
        foreach ($tipoBorrar in $tiposBorrar) {
            $tipoBorrar.DeleteObject();
        
        }
        $context.ExecuteQuery();

        $list.Update();  
    
        try{
            $context.executeQuery()
            write-host "content type $tipodecontenido added to the list" -foregroundcolor green
        }
        catch{
            write-host "ERROR: $($_.Exception.Message)" -foregroundcolor red
        }  

        #region VISTA
        $views = $list.Views;
        $context.Load($views);
        $context.executeQuery()
    
    $vista = $null;

    foreach ($view in $views) {

            if ($view.Title -eq "Todos los elementos") { #Todos los documentos
                $vista = $view;
                continue;
            }
      }

if ($vista) {
        
        $viewFields = $view.ViewFields;
        $context.Load($viewFields);
        $context.ExecuteQuery();
        $view.ViewFields.Add("Arma_ID");
        $view.ViewFields.Add("Arma_Ataque");
        $view.ViewFields.Add("Arma_Daño");
        $view.ViewFields.Add("Arma_Tipo");
        $view.ViewFields.Add("Arma_Arrojadiza");
        $view.ViewFields.Add("Arma_Car");
        $view.ViewFields.Add("Arma_Caracteristicas");
        $view.ViewFields.Add("Arma_Foto");

        $view.ViewQuery = "<OrderBy><FieldRef Name='Title' Ascending='FALSE'/></OrderBy>"
        
        
        $view.Update();

    try{
            $context.executeQuery()
            write-host "vista modificada correctamente" -foregroundcolor green
        }
        catch{
            write-host "info: $($_.Exception.Message)" -foregroundcolor red
        }  
    }
    else {
        Write-Host "ERROR: no localizamos la vista" -ForegroundColor Red
    }

    }
    
    $list = $web.Lists.GetByTitle("Armas")
    $context.Load($list)
    $context.executeQuery()
    
    $context.Load($list.Fields)
    $context.executeQuery()
        

    $titleField = $list.Fields| Where-Object {$_.InternalName -eq "Title"}
    $context.Load($titleField)
    $context.executeQuery()
       

    $titleField.Title = "Nombre del arma"
    $titleField.Update()

    $list = $web.Lists.GetByTitle("Armas")
    $context.Load($list)
    $context.executeQuery()

        
        

    <#
    Comandos importantes

    ejecutar
    $context.Load($list)
    $context.executeQuery()

    cargar datos de una lista
    $list = $web.Lists.GetByTitle("Armas")
    $context.Load($list)
    $context.executeQuery()
    $context.Load($list.Fields)
    $context.executeQuery()

    buscar columna por internal name
    $titleField = $list.Fields| Where-Object {$_.InternalName -eq "Title"}

    mirar informacion de una columna
    $titleField.SchemaXml

    Cambiar informacion de un columna
    a machete
    $TitleField.SchemaXML ='<Field ID="{fa564e0f-0c70-4ab9-b863-0177e6ddd247}" Name="Title" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="Title" Group="_Hidden" Type="Text" Displ
ayName="Nombre del arma" Required="TRUE" FromBaseType="TRUE" DelayActivateTemplateBinding="GROUP,SPSPERS,SITEPAGEPUBLISHING" Version="1" Sealed="FALSE" ColName="nvarchar1" RowOrdi
nal="0" />'
    poco a poco
    $TitleField.Title = "Nombre del arma"

    #>
    
     
    
        <#
        modificar title
        $list = $web.Lists.GetByTitle("Armas")
        $context.Load($list)
        $context.executeQuery()
        $list

        $context.Load($list.Fields)
        $context.executeQuery()
        $list.Fields

        $titleField = $list.Fields| Where-Object {$_.InternalName -eq "Title"}
        $context.Load($titleField)
        $context.executeQuery()
        $titleField

        $TitleField.SchemaXML
        $TitleField.Title = "Nombre del arma"
        $titleField.Update()
 
        
        #>

        <#
        ver
        $list = $web.Lists.GetByTitle("Armas")
        $context.Load($list)
        $context.executeQuery()
        $list

        $context.Load($list.Fields)
        $context.executeQuery()
        $list.Fields

        $titleField = $list.Fields| Where-Object {$_.InternalName -eq "Title"}
        $context.Load($titleField)
        $context.executeQuery()
        $titleField

        $TitleField.SchemaXML
        #>




        $web = $context.Web;
    
        $fields = $web.Fields;

        $context.Load($web);
        $context.Load($fields);

        $context.ExecuteQuery();

        $columns = "Personaje_Nombre","Personaje_Usuario","Caracteristica_Fuerza","Caracteristica_Destreza","Caracteristica_Constitución",
        "Caracteristica_Inteligencia","Caracteristica_Sabiduria","Caracteristica_Carisma","Campanha","Bono_Competencia", "Personaje_Foto";

        foreach($column in $columns) {

            $field = $fields.GetByInternalNameOrTitle($column);

            if ($field) {
                $context.Load($field);
                $context.ExecuteQuery();
        
                $field.DeleteObject();

                try{
                    $context.executeQuery()
                    write-host "Columna $column eliminada correctamente" -foregroundcolor green
                }
                catch{
                    write-host "ERROR: $($_.Exception.Message)" -foregroundcolor red
                }
            }
         }
        
           
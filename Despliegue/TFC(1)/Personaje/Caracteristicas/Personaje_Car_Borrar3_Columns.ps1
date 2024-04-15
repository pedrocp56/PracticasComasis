

        $web = $context.Web;
    
        $fields = $web.Fields;

        $context.Load($web);
        $context.Load($fields);

        $context.ExecuteQuery();

        $columns = "Caracteristica_Fuerza","Caracteristica_Destreza","Caracteristica_Constitución","Caracteristica_Inteligencia","Caracteristica_Sabiduria","Caracteristica_Carisma",
                    "Caracteristica_Bono_Fuerza", "Caracteristica_Bono_Destreza", "Caracteristica_Bono_Constitución", "Caracteristica_Bono_Inteligencia", "Caracteristica_Bono_Sabiduria", 
                    "Caracteristica_Bono_Carisma", "Bono_Competencia";

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
        
           
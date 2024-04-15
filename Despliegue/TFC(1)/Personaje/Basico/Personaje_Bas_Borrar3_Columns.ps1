

        $web = $context.Web;
    
        $fields = $web.Fields;

        $context.Load($web);
        $context.Load($fields);

        $context.ExecuteQuery();

        $columns = "Personaje_Nombre","Personaje_Usuario","Personaje_Clase","Personaje_Nivel","Personaje_Raza","Personaje_Alinamiento","Personaje_Estado", "Personaje_Inspiracion", 
                "Personaje_Edad", "Personaje_Altura", "Personaje_Peso", "Personaje_Ojos", "Personaje_Piel", "Personaje_Pelo", "Personaje_Foto";

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
        
           
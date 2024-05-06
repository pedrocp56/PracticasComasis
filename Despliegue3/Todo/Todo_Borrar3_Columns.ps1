$web = $context.Web;
    
$fields = $web.Fields;

$context.Load($web);
$context.Load($fields);

$context.ExecuteQuery();

$columns = "Campanha_Descripcion","Campanha_Fecha","Campanha_Foto",

"Personaje_Usuario","Caracteristica_Fuerza","Caracteristica_Destreza","Caracteristica_Constitucion",
"Caracteristica_Inteligencia","Caracteristica_Sabiduria","Caracteristica_Carisma","Bono_Competencia", "Personaje_Foto",

"Arma_Ataque","Arma_Danho","Arma_Tipo", "Arma_Arrojadiza", "Arma_Car", "Arma_Caracteristicas",
        
"Competencia","Bonificacion_Adiccional";

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
        
           
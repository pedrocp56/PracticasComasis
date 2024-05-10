var PersonajeItem = /** @class */ (function () {
    function PersonajeItem(ListItem, Lista) {
        this.ListItem = ListItem;
        this.Lista = Lista;
    }
    PersonajeItem.prototype.MapearCampos = function () {
        this.Nombre = this.ListItem.Personaje_Nombre;
        this.Jugador = this.ListItem.Personaje_Usuario;
        this.Clase = this.ListItem.Personaje_Clase;
        this.Nivel = this.ListItem.Personaje_Nivel;
        this.Raza = this.ListItem.Personaje_Raza;
        this.Alinamiento = this.ListItem.Personaje_Alinamiento;
        this.Estado = this.ListItem.Personaje_Estado;
        this.Edad = this.ListItem.Personaje_Edad;
        this.Altura = this.ListItem.Personaje_Altura;
        this.Peso = this.ListItem.Personaje_Peso;
        this.Ojos = this.ListItem.Personaje_Ojos;
        this.Piel = this.ListItem.Personaje_Piel;
        this.Pelo = this.ListItem.Personaje_Pelo;
        this.Foto = this.ListItem.Personaje_Foto;
    };
    return PersonajeItem;
}());
export { PersonajeItem };
//# sourceMappingURL=PersonajeItem.js.map
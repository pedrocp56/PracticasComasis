var ArmaItem = /** @class */ (function () {
    function ArmaItem(ListItem, Lista) {
        this.ListItem = ListItem;
        this.Lista = Lista;
        this.MapearCampos();
    }
    ArmaItem.prototype.MapearCampos = function () {
        this.ID = this.ListItem.ID;
        this.Nombre = this.ListItem.Title;
        this.Ataque = this.ListItem.Arma_Ataque;
        this.Daño = this.ListItem.Arma_Da_x00f1_o;
        this.Tipo = this.ListItem.Arma_Tipo;
        this.Arrojadiza = this.ListItem.Arma_Arrojadiza;
        this.Car = this.ListItem.Arma_Car;
        this.Caracteristicas = this.ListItem.Arma_Caracteristicas;
        this.Foto = this.ListItem.Arma_Foto;
    };
    return ArmaItem;
}());
export { ArmaItem };
/* eslint-enable */ 
//# sourceMappingURL=ArmaItem.js.map
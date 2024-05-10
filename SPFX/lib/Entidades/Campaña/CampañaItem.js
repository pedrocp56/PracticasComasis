var CampañaItem = /** @class */ (function () {
    function CampañaItem(ListItem, Lista) {
        this.ListItem = ListItem;
        this.Lista = Lista;
    }
    CampañaItem.prototype.MapearCampos = function () {
        this.ID = this.ListItem.ID;
        this.Nombre = this.ListItem.Title;
        this.Descipcion = this.ListItem.Campaña_Descripcion;
        this.Foto = this.ListItem.Campaña_Foto;
    };
    return CampañaItem;
}());
export { CampañaItem };
/* eslint-enable */ 
//# sourceMappingURL=Campa%C3%B1aItem.js.map
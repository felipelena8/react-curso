class ProductoModel {
  constructor() {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    this.productos = productos.map(
      (producto) =>
        new Producto(
          producto.id,
          producto.nombre,
          producto.precio,
          producto.img
        )
    );
  }
  guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(this.productos));
  }
  agregarProducto(id, nombre, precio, img) {
    this.productos.push(new Producto(id, nombre, precio, img));
    this.guardarProductos();
  }
}
class Producto {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = img;
  }
}

class Carro {
  constructor() {
    this.precio = JSON.parse(localStorage.getItem("cartPrice")) || 0;
    this.productos = JSON.parse(localStorage.getItem("cartProductos")) || 0;
    this.cantPorProducto =
      JSON.parse(localStorage.getItem("cartCantProds")) || [];
  }
  eliminarProd(id) {
    let prod = buscarProducto(id);
    let indice = indiceProd(id, this.productos);
    let countProd = this.cantPorProducto(indice);
    this.cantPorProducto[indice] = 0;
    this.precio += prod.precio * countProd;
  }
  agregarProducto(id) {
    if (encuentraProd(id, this.productos)) {
      let indice = indiceProd(id, this.productos);
      this.cantPorProducto[indice]++;
      this.precio += buscarProducto(id).precio;
    } else {
      this.productos.push(id);
      this.cantPorProducto.push(1);
      this.precio += buscarProducto(id).precio;
    }
  }
}
function buscarProducto(id) {
  for (let prod of productos) {
    if (prod.id == id) {
      return prod;
    }
  }
}

function encuentraProd(id, listId) {
  for (let prod of listId) {
    if (prod == id) {
      return true;
    }
  }
  return false;
}

function indiceProd(id, listId) {
  for (let prod of listId) {
    if (prod == id) {
      return listId.indexOf(id);
    }
  }
}

function vecesProducto(listCount, index) {
  let count = listCount[index];
  return count;
}
const productos = [
  new Producto(
    2,
    "Teclado Redragon K550 Yama",
    7250,
    "Teclado-Mecanico-Redragon-YAMA-K550.jpg",
    ["perifericos", "teclados"]
  ),
  new Producto(1, "Auriculares HyperX Cloud II", 11200, "auriculares.jpg", [
    "perifericos",
    "auriculares",
  ]),
  new Producto(4, "Procesador Intel Core I7 9700F", 35000, "i7.jpg", [
    "procesadores",
  ]),
  new Producto(
    26,
    "GABINETE AUREOX GAMER ORION 350G TEMPLADO RGB ATX",
    6000,
    "gabinete aureox.jpg",
    ["gabinetes"]
  ),
  new Producto(
    28,
    "Discos Solido SSD M.2 ADATA 512GB FALCON 3100MB/s",
    7800,
    "ssd falcon.jpg",
    ["almacenamiento"]
  ),
  new Producto(5, "AMD PC AMD ATHLON 3000G", 35000, "pc amd.jpg", [
    "computadoras",
    "amd",
  ]),
  new Producto(7, "Mouse Glorious Model D", 7000, "mouse.jpg", [
    "perifericos",
    "mouses",
  ]),
  new Producto(8, "Placa de video NVIDIA MSI RTX 3070", 300000, "3070.jpg", [
    "placasGraficas",
  ]),
  new Producto(9, "Asus fuente Alimentacion 650W", 18000, "fuente.jpg", [
    "fuentes",
  ]),
  new Producto(6, "PC ASUS ATHLON 3000G", 40000, "pc asus.jpg", [
    "computadoras",
    "amd",
  ]),
  new Producto(
    11,
    "Teclado Logitech G213 Prodigy RGB Gaming Inglés Internacional",
    4500,
    "teclado.jpg",
    ["perifericos", "teclados"]
  ),
  new Producto(
    16,
    "Monitor LG 27 GAMER 27GL650F FULL HD 144HZ",
    55000,
    "monitor lg 144hz.jpg",
    ["monitores"]
  ),
  new Producto(12, "PC INTEL G4930+4GB+240GB SSD", 35000, "pc intel 2.jpg", [
    "computadoras",
    "intel",
  ]),
  new Producto(10, "PC INTEL I7 11700+H510+8GB+1TB", 80000, "pc-intel-i7.jpg", [
    "computadoras",
    "intel",
  ]),
  new Producto(
    20,
    "MOUSE PAD HYPERX FURY S PRO SPEED EDITION XL",
    3400,
    "mousepadXLHYPERX.jpg",
    ["mousepads", "perifericos"]
  ),
  new Producto(
    13,
    "Auriculares Hyperx Cloud Flight Wireless",
    13300,
    "hyperx flight.jpg",
    ["auriculares", "perifericos"]
  ),
  new Producto(15, "Monitor LG LED 22MN430H-B HDMI", 24000, "monitor lg.jpg", [
    "monitores",
  ]),
  new Producto(14, "Auriculares Logitech G935", 23000, "aurisLogitech.jpg", [
    "auriculares",
    "perifericos",
  ]),
  new Producto(
    17,
    "Monitor 24 Gigabyte G24F gaming IPS 165HZ HDMI",
    49000,
    "monitor gigabyte 165.jpg",
    ["monitores"]
  ),
  new Producto(
    25,
    "GABINETE V200 TG THERMALTAKE C/FUENTE 500W AMD EDITION",
    8300,
    "gabinete.jpg",
    ["gabinetes"]
  ),
  new Producto(
    18,
    "Microfono Hyperx Quadcast S RGB",
    16000,
    "microfono-hyperx.jpg",
    ["microfonos", "perifericos"]
  ),
  new Producto(
    3,
    "TECLADO MECÁNICO CON RETROILUMINACIÓN G413 PARA GAMING",
    6700,
    "teclado 2.jpg",
    ["perifericos", "teclados"]
  ),
  new Producto(
    19,
    "Microfono Trust Fyru 4IN1 Streaming Mic GXT258 USB RGB",
    10200,
    "microfono-trust.jpg",
    ["microfonos", "perifericos"]
  ),
  new Producto(
    22,
    "TECLADO Y MOUSE GAMER TRUST AZOR GXT838 ESPAÑOL GXT 838",
    2300,
    "tecladoymouse.jpg",
    ["perifericos", "kitsMouse"]
  ),
  new Producto(
    21,
    "MOUSEPAD TRUST GXT 758 XXL GXT758",
    2500,
    "mousepadTrust.jpg",
    ["mousepads", "perifericos"]
  ),
  new Producto(
    23,
    "TECLADO Y MOUSE CORSAIR K55 + HARPOON RGB",
    8000,
    "teclado-y-mouse-corsair-k55.jpg",
    ["kitsMouse", "perifericos"]
  ),
  new Producto(24, "PARLANTES GENIUS SP-HF800A", 9500, "parlantes-genius.jpg", [
    "parlantes",
  ]),
  new Producto(
    27,
    "GABINETE RAIDMAX F05 ARGB FAN X1 VIDRIO TEMPLADO",
    7500,
    "gabinete-raidmax.jpg",
    ["gabinetes"]
  ),
  new Producto(
    29,
    "Disco Solido SSD M.2 WD 240GB Green SN350 2400MB/s NVMe PCI-Express x4",
    4000,
    "ssd wd.jpg",
    ["almacenamiento"]
  ),
  new Producto(
    30,
    "Memoria Patriot Viper DDR4 8GB 3200MHz Steel RGB",
    5160,
    "ram patriot.jpg",
    ["rams"]
  ),
  new Producto(
    31,
    "Memoria GeiL DDR4 8GB 3000MHz Orion RGB Black",
    5200,
    "ram ceil 8gb.jpg",
    ["rams"]
  ),
  new Producto(
    32,
    "Cooler CPU Aerocool VERKHO I ",
    1500,
    "cooler aerocool.jpg",
    ["coolers"]
  ),
  new Producto(
    33,
    "Cooler FAN Cooler Master MASTERFAN MF120 HALO ARGB",
    4200,
    "coolermaster.jpg",
    ["coolers"]
  ),
  new Producto(
    37,
    "Mouse Logitech G903 Lightspeed Wireless Gaming 16.000dp",
    10200,
    "mouse g903.jpg",
    ["mouses", "perifericos"]
  ),
  new Producto(
    35,
    "Mouse HyperX Pulsefire CORE RGB ",
    2300,
    "mouse hyperx pulsefire.jpg",
    ["mouses", "perifericos"]
  ),
  new Producto(
    34,
    "Mouse Logitech G PRO Hero Gaming 16000DPI RGB",
    3400,
    "mouse gpro.jpg",
    ["mouses", "perifericos"]
  ),
  new Producto(
    36,
    "Mouse Logitech G203 Lightsync RGB White",
    2300,
    "mouse g203.jpg",
    ["mouses", "perifericos"]
  ),
];
export default productos;

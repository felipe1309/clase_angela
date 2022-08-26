class Carro {
  /**
   * es el estado del carro (manejado como booleano)
   */
  estadoDleCarro = true;
  /**
   *
   * @param {Number} placa este es el placa del carro
   * @param {String} marca este es la marca del carro
   */
  constructor(placa, marca, idUser) {
    this.placa = placa;
    this.marca = marca;
    this.id = idUser;
  }
  /**
   * no retorna nada
   */
  guardarCarro() {
    if (this.estadoDleCarro) {
      console.log("por que me jodes, ya lo tienes guardado");
      return;
    }
    this.estadoDleCarro = true;
    console.log("carro guardado");
  }
  botarCarro() {
    if (!this.estadoDleCarro) {
      console.log("por que me jodes, ya lo tienes afuera");
      return;
    }
    this.estadoDleCarro = false;
    console.log("carro botado");
  }
  mostrarEstado() {
    if (this.estadoDleCarro) {
      console.log("tienes el carro guardo");
      return true;
    } else {
      console.log("no tienes el carro guardado");
      return false;
    }
  }
}
class user {
  /**
   *
   * @param {String} nombre este es el nombre del usuario
   * @param {Number} Id este es el id del usuario
   */
  constructor(nombre, Id) {
    this.nombre = nombre;
    this.id = Id;
  }
}
class UI {
  /**
   * @param {Carro[]} este es la lista de carros que se ba a renderizar
   */
  listCarros = [];
  view = document.getElementById("section__view");
  /**
   *
   * @param {Carro} carro este es el carro que se ba a agregar para poder renderizar en pantalla
   */
  createANewCarro(carro) {
    this.listCarros.push(carro);
    if (this.listCarros.length <= 5) {
      const newViewCarro = document.createElement("div");
      newViewCarro.className = "lista__carros";
      const valueDivCarro = `
            <ul>
                <li> <strong>usuario:</strong> ${carro.id}</li>
                <li> <strong>marca :</strong> ${carro.marca}</li>
                <li> <strong>placa:</strong> ${carro.placa}</li>
            </ul>
        `;
      newViewCarro.innerHTML = valueDivCarro;

      this.view.appendChild(newViewCarro);
    } else {
        console.log("felipe")
        const form = document.getElementById("section__form")
        const alert = document.createElement("span")
        alert.innerText = "solo mpuede haver 5 carros parqueados"
        alert.id = "alert"
        form.appendChild(alert)
        setTimeout(()=>{
            const spanDelete = document.getElementById("alert")

        },3000)
    }
  }
}
// views
const ui = new UI();
const submit = document.getElementById("submit");
const placaCarro = document.getElementById("input__placa-carro");
const marcaCarro = document.getElementById("input__marca-carro");
const nombreUser = document.getElementById("input__nombre-user");
const IdUser = document.getElementById("input__CI-user");
console.log(placaCarro);
console.log(marcaCarro);
console.log(nombreUser);
console.log(IdUser);
/**
 * lista de carros
 */
function addCarro(e) {
  e.preventDefault();
  const placa = placaCarro.value;
  const marca = marcaCarro.value;
  const Id = IdUser.value;

  const newCarro = new Carro(placa, marca, Id);
  ui.createANewCarro(newCarro);
}

submit.addEventListener("click", addCarro);

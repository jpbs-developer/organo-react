import TextField from "../TextField";
import "./Form.css";

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card da pessoa</h2>
        <TextField label="Nome" placeholder="Digite seu nome"></TextField>
        <TextField label="Nome" placeholder="Digite seu cargo"></TextField>
        <TextField
          label="Nome"
          placeholder="Digite o endereço da imagem"
        ></TextField>
      </form>
    </section>
  );
};

export default Form;

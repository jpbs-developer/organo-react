import TextField from "../TextField";
import DropDownList from "../DropDownList";
import "./Form.css";

const Form = () => {
  const teams = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Inavação e Gestão",
  ];
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
        <DropDownList items={teams} />
      </form>
    </section>
  );
};

export default Form;

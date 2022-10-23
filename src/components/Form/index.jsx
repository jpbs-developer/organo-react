import TextField from "../TextField";
import DropDownList from "../DropDownList";
import "./Form.css";
import Button from "../Button";

const Form = () => {
  const teams = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Inavação e Gestão",
  ];

  const onSave = (event) => {
    event.preventDefault();
    console.log("Submited");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card da pessoa</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
        ></TextField>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu cargo"
        ></TextField>
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        ></TextField>
        <DropDownList  required={true} items={teams} />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;

import S from "./queroDoar.module.scss";
import book from "../../assets/book.png";
import axios from "axios";
import { useState } from "react";

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem_url, setImagem_url] = useState("");

  const enviarDados = async () => {
    const urlApi = "https://projetoapi-0dfq.onrender.com/doar";
    const dadosEnviar = {
      titulo,
      categoria,
      autor,
      imagem_url,
    };

    await axios.post(urlApi, dadosEnviar);

    alert("Livro cadastrado!");

    setTitulo("");
    setCategoria("");
    setAutor("");
    setImagem_url("");
  };

  const capturaTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const capturaCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const capturaAutor = (e) => {
    setAutor(e.target.value);
  };

  const capturaImagem = (e) => {
    setImagem_url(e.target.value);
  };

  return (
    <section className={S.principal}>
      <section className={S.container}>
        <h2>
          Por favor, preencha o formulário com suas informações e as informações
          do Livro
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <img src={book} alt="" />
            <h3>Informações do Livro</h3>
          </div>
          <input
            type="text"
            placeholder="Titulo"
            onChange={capturaTitulo}
            value={titulo}
          />
          <input
            type="text"
            placeholder="Categoria"
            onChange={capturaCategoria}
            value={categoria}
          />
          <input
            type="text"
            placeholder="Autor"
            onChange={capturaAutor}
            value={autor}
          />
          <input
            type="text"
            placeholder="Link da Imagem"
            onChange={capturaImagem}
            value={imagem_url}
          />
          <input
            className={S.doar}
            type="submit"
            value="Doar"
            onClick={enviarDados}
          />
        </form>
      </section>
    </section>
  );
}

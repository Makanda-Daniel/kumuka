function Botao({ children, onClick, tipo = "button" }) {
    return (
    <button
      type={tipo}
      onClick={onClick}
      class="bg-v text-texto hover:bg-ve w-full py-3 rounded-xl font-semibold transition-colors cursor-pointer"
    >
      {children}
    </button>
  );
}
export default Botao
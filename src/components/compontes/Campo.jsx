function Campo ({nome, tipo="text", placeholder, aomudar, valor, }) {
    return(
        <input name={nome} type={tipo} placeholder={placeholder} value={valor} onChange={aomudar} class="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-texto placeholder:text-kumuka-muted outline-none focus:border-v" />
    )
}

export default Campo
const Navbar = () => {
    return (
        <nav class="relative">
            <div class="bg-white">
                <div class="flex justify-between h-16 px-5 shadow items-center">
                    <div class="flex items-center space-x-8">
                        <a href="/">
                            <h1 class="flex items-center text-md cursor-pointer">
                                <img
                                    class="h-6 w-10-mr-4"
                                    src="/assets/img/programaIncluir_Colorido_FundoTransparente.svg"
                                    alt="Logo Incluir"
                                    title="Incluir"
                                />
                            </h1>
                        </a>
                    </div>
                    <div class="flex space-x-4 items-center">
                        <a
                            href="/login"
                            class="bg-orange-400 px-4 py-2 rounded text-white hover:bg-orange-300 text-sm"
                        >Ir para o Portal Incluir</a>
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
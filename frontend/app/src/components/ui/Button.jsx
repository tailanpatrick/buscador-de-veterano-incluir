const Button = () => {
    return ( 
        <button
          class="mt-5 block w-full select-none rounded-lg bg-orange-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-orange-300 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="submit" data-ripple-light="true">
          Buscar
        </button>
     );
}
 
export default Button;
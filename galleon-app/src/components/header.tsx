import ContainerGrid from "./container";

export default function Header() {
  return (
    <header>
      <ContainerGrid className="flex items-center justify-start pt-10 pb-4 border-b-[1px] border-slate-800">
        <h1 className="w-full text-2xl font-inter font-semibold text-center @tablet:text-3xl @tablet:text-left">The Dog API Application</h1>
      </ContainerGrid>
    </header>
  )
}

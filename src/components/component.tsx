import ModelsTable from '../components/ModelsTable';
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ehCStHUQubx
 */

export function Component() {
  return (
    <div className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Large Language Models
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">Pricing</h1>
            <div>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-10">
                Compare the features and pricing of large language models across different providers to find the best fit
                for your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl flex flex-col gap-4 min-[400px]:gap-8 mt-10">
          <div className="overflow-auto">
            <ModelsTable />
          </div>
        </div>
      </div>
    </div>
  )
}

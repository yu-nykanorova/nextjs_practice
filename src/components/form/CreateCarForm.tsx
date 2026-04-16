import {createCarAction} from "@/src/app/actions/car.actions";

export const CreateCarForm = () => {
    return (
        <div className='pt-10 px-6 pb-6 flex flex-col items-center justify-center'>
            <h1 className="mb-8 text-gray-700 text-[30px]">Add new car</h1>
            <form className="w-1/2 p-8 flex flex-col gap-4 bg-slate-300 rounded-md shadow-xl" action={createCarAction}>
                <label className="block text-[20px]">
                    <span className="text-red-600">*</span>Brand:
                    <input className="w-full px-2 py-1 block text-[18px] bg-white rounded-md outline-orange-500" type="text" name="brand" required/>
                </label>
                <label className="text-[20px]">
                    <span className="text-red-600">*</span>Price:
                    <input className="w-full px-2 py-1 block text-[18px] bg-white rounded-md outline-orange-500" type="number" name="price" required/>
                </label>
                <label className="text-[20px]">
                    <span className="text-red-600">*</span>Year:
                    <input className="w-full px-2 py-1 block text-[18px] bg-white rounded-md outline-orange-500" type="number" name="year" required/>
                </label>
                <button className="w-1/3 mt-8 px-4 py-1 self-center text-[20px] bg-white border-2 border-orange-500 rounded-md shadow-xl transition-all duration-200 ease-in-out hover:bg-orange-500 hover:text-white ">Save</button>
            </form>
        </div>
    );
};

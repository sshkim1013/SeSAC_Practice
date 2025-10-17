import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../store/counterSlice";

export default function StepSet() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.counter.step);

  const handleStepChange = (newStep) => {
    dispatch(setStep(newStep));
  };

  const baseClass = "px-5 py-3 text-base font-black border-2 cursor-pointer";
  const isActive = "border-black bg-black text-white";
  const isInActive = "border-gray-400 hover:bg-gray-100";

  return (
    <div className="text-center p-5 my-2">
      <h3 className="mb-5 text-xl font-black">Step 설정</h3>
      <div className="flex gap-4 justify-center mb-5">
        <button
          onClick={() => handleStepChange(1)}
          className={`${baseClass} ${step === 1 ? isActive : isInActive}`}
        >
          Step 1
        </button>
        <button
          onClick={() => handleStepChange(5)}
          className={`${baseClass} ${step === 5 ? isActive : isInActive}`}
        >
          Step 5
        </button>
        <button
          onClick={() => handleStepChange(10)}
          className={`${baseClass} ${step === 10 ? isActive : isInActive}`}
        >
          Step 10
        </button>
      </div>
      <div className="p-3 text-base font-black">
        현재 Step: <strong>{step}</strong>
      </div>
    </div>
  );
}

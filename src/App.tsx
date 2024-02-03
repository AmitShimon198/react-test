
import { useCallback, useState, FunctionComponent } from "react";
import { NotOptimizedContainer } from "components/unoptimizedComponents/UnOptimizedContainer";
import { OptimizedContainer } from "components/optimizedComponents/OptimizedContainer";

const App: FunctionComponent = () => {
  const [shouldDisplayOptimized, setShouldDisplayOptimized] = useState<boolean>(true)
  const toggle = useCallback(() => setShouldDisplayOptimized((prev) => (!prev)), [])

  return (
    <>
      <button onClick={toggle}>Toggle Components</button>
      {shouldDisplayOptimized && <OptimizedContainer />}
      {!shouldDisplayOptimized && <NotOptimizedContainer />}
    </>
  );
};

export default App;

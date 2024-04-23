import React from 'react';

interface StackComponentProps {
    stack: string[];
}

const StackComponent: React.FC<StackComponentProps> = ({ stack }) => {
    return (
      <div className="mb-3 pt-2 flex items-center gap-2 overflow-scroll">
        {stack.map((techs, index) => (
          <div
            key={index}
            className="rounded-lg border border-teal-400 bg-teal-600/50 px-2 py-1 text-[10px]"
          >
            {techs}
          </div>
        ))}
      </div>
    );
  };
  
  export default StackComponent;
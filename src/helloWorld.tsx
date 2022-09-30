import React from 'react';
import { renderAge, renderName } from './method';

function Abv({name, age}:{name:string, age:number}) {
  return (
    <>
    <div>{renderName(name)}</div>
    <div>{renderAge(age)}</div>
    </>

  );
}

export default Abv;

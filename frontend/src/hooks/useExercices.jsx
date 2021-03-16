import { useContext, useEffect, useState } from "react";
import ExercicesContext from "../context/ExercicesContext";
import ExercicesService from "../services/exercices.service";

export function useExercices({ params } = { params: null }, refresh) {
  const [loading, setLoading] = useState(false);
  const { exercices, setExercices } = useContext(ExercicesContext);

  //el parametro refresh se ha introducido debido a un bug que hay que cada vez que le paso params los cambia, entonces provoca un bucle infinito. 
  //A refresh se le pasa el username, el limit o algo que al cambiar tengo que actualizar la lista y asi funciona correctamente y no hace bucle infinito.
  useEffect(
    function () {
      setLoading(true);
      ExercicesService.query(params).then(({ data }) => {
        setExercices(data.results);

        setLoading(false);
      });
    },
    [refresh]
  );

  return {
    loading: loading,
    exercices: exercices,
  };
}

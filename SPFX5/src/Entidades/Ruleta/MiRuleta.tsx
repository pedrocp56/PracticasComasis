/* eslint-disable @typescript-eslint/no-floating-promises */

import * as React from 'react';
import { useEffect, useState } from "react";
import { ArmaItem } from "../Arma/ArmaItem";
import { Wheel } from "react-custom-roulette";
import ArmaBotonInfo from '../Arma/Componentes/BotonInfo';
import './MiRuletaWP.css'; // Importar el archivo CSS

export interface IFRuletaCompWebpartProps {
    armas: ArmaItem[];
}

export default function MiRuletaWP(props: IFRuletaCompWebpartProps): JSX.Element {
    const [data, setData] = useState<{ id: number; option: string; item: ArmaItem }[]>([]);
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(-1);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [fixedPrize, setFixedPrize] = useState<boolean>(false);
    const [excludedPrizes, setExcludedPrizes] = useState<number[]>([]);
    const [excludePrizeMode, setExcludePrizeMode] = useState<boolean>(false);
    const [excludeId, setExcludeId] = useState<number | null>(null);
    const [spinDuration, setSpinDuration] = useState<number>(5); // Nuevo estado para la duración del giro
    const [initialSpinDuration, setInitialSpinDuration] = useState<number>(5);

    // Función para cargar los datos de las armas
    const cargarData = async (): Promise<void> => {
        if (props.armas !== null && props.armas !== undefined) {
            const op = props.armas.map(a => ({
                id: a.ID,
                option: a.Nombre,
                item: a,
            }));
            setData(op);
        }
    };

    useEffect((): void => {
        const load = async (): Promise<void> => {
            try {
                await cargarData();
            } catch (error) {
                console.error("Error loading data: ", error);
            }
        };
        load();
    }, [props.armas]);

    // Función para encontrar el índice de un elemento por su ID
    const findIndexById = (array: { id: number }[], id: number): number => {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                return i;
            }
        }
        return -1;
    };

    // Función para suavizar la transición de spinDuration a 5
    const smoothResetSpinDuration = (): void => {
        let currentDuration = initialSpinDuration;
        const step = 0.005; // Ajusta la velocidad de la transición aquí
        const interval = (): void => {
            currentDuration -= step;
            if (currentDuration <= 5) {
                setSpinDuration(5);
                return;
            }
            setSpinDuration(currentDuration);
            requestAnimationFrame(interval);
        };
        requestAnimationFrame(interval);
    };

    // Función para manejar el clic en el botón de girar
    const handleSpinClick = (): void => {
        if (spinDuration < 3) {
            if (data.length > 0) {
                let newPrizeNumber;
                if (fixedPrize && selectedId !== null && selectedId !== -1) {
                    const foundIndex = findIndexById(data, selectedId);
                    newPrizeNumber = foundIndex !== -1 ? foundIndex : Math.floor(Math.random() * data.length);
                } else {
                    const availableOptions = data.filter(d => excludedPrizes.indexOf(d.id) === -1);
                    const randomIndex = Math.floor(Math.random() * availableOptions.length);
                    const randomId = availableOptions[randomIndex].id;
                    newPrizeNumber = findIndexById(data, randomId);
                }
                setPrizeNumber(newPrizeNumber);
                setMustSpin(true);
                setInitialSpinDuration(spinDuration); // Guardar la duración inicial del giro
            }
        }
        // Si spinDuration no baja de 2, establecerlo en 5 y suavizar la transición
        else {
            setInitialSpinDuration(spinDuration); // Guardar la duración inicial del giro
            setSpinDuration(5);
            smoothResetSpinDuration();
        }
    };
    // Función para manejar el cambio en la selección de arma fijada
    const handleFixedPrizeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedId(parseInt(event.target.value));
    };

    // Función para alternar entre fijar o no fijar la ruleta en un premio específico
    const toggleFixedPrize = (): void => {
        setFixedPrize(!fixedPrize);
    };

    // Función para alternar entre el modo de exclusión de premios
    const toggleExcludePrizeMode = (): void => {
        setExcludePrizeMode(!excludePrizeMode);
    };

    // Función para manejar la exclusión de una arma de la ruleta
    const handleExcludePrize = (): void => {
        if (excludeId !== null) {
            setExcludedPrizes([...excludedPrizes, excludeId]);
            setExcludeId(null);
        }
    };

    // Función para reiniciar la lista de armas excluidas
    const resetExcludedPrizes = (): void => {
        setExcludedPrizes([]);
    };

    // Función para manejar el cambio de la ID de arma a excluir
    const handleExcludeIdChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setExcludeId(parseInt(event.target.value));
    };

    // Función para manejar el cambio de duración del giro
    const handleSpinDurationChange = (event: any): void => {
        setSpinDuration(parseFloat(event.target.value));
    };

    const availableOptions = data.filter(d => excludedPrizes.indexOf(d.id) === -1);

    useEffect((): void => {
        console.log("Arma seleccionada: " + selectedId);
    }, [selectedId]);

    useEffect((): void => {
        console.log("Armas excluidas: " + excludedPrizes);
    }, [excludedPrizes]);



    useEffect(() => {
        if (!mustSpin && prizeNumber !== -1) {
            smoothResetSpinDuration();
        }
    }, [mustSpin, prizeNumber]);

    return (
        <div>
            <h1>La ruleta de las armas</h1>
            <hr />
            <div className="roulette-container">
                {data.length > 0 ? (
                    <>
                        <Wheel
                            mustStartSpinning={mustSpin}
                            prizeNumber={prizeNumber}
                            data={data}
                            outerBorderColor={"#f2f2f2"}
                            outerBorderWidth={25}
                            innerBorderColor={"#f2f2f2"}
                            radiusLineColor={"#dedede"}
                            radiusLineWidth={10}
                            textColors={["#ffffff"]}
                            fontSize={13}
                            perpendicularText={false}
                            backgroundColors={[
                                "#F22B35",
                                "#F99533",
                                "#24CA69",
                                "#514E50",
                                "#46AEFF",
                                "#9145B7"
                            ]}
                            spinDuration={spinDuration} // Configura la duración del giro
                            onStopSpinning={() => {
                                setMustSpin(false);
                            }}
                        />
                        <label className="lever-container">
                            <input
                                title='Tira de la palanca'
                                type="range"
                                min="0.1"
                                max="5"
                                step="0.1"
                                value={spinDuration}
                                onChange={handleSpinDurationChange}
                                onMouseUp={handleSpinClick}
                                disabled={mustSpin}
                                aria-orientation='vertical'
                            />
                        </label>
                        <div>Tira de la palanca</div>
                    </>
                ) : (
                    <p>Cargando...</p>
                )}

            </div>
            <br />
            <br />
            {!mustSpin && prizeNumber !== -1 &&
                <>
                    <div>Informacion del arma ({data[prizeNumber].option})</div>
                    <ArmaBotonInfo titulo={data[prizeNumber].option} info={data[prizeNumber].item} />
                </>
            }
            <br />
            <br />
            <br />
            <hr />
            <button onClick={toggleFixedPrize}>
                {fixedPrize ? "Fijar ruleta" : "Fijar ruleta"}
            </button>
            {fixedPrize && (
                <div>
                    <label htmlFor="selectName">Selecciona Arma:</label>
                    <select id="selectName" value={selectedId !== null ? selectedId : ""} onChange={handleFixedPrizeChange}>
                        <option key={-1} value={-1}>Ninguna</option>
                        {data.map(d => (
                            <option key={d.id} value={d.id}>
                                {d.option}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            <hr />
            <button onClick={toggleExcludePrizeMode}>
                {excludePrizeMode ? "Eliminar armas de la ruleta" : "Eliminar armas de la ruleta"}
            </button>
            {excludePrizeMode && (
                <div>
                    <label htmlFor="excludeId">Selecciona Arma a Excluir:</label>
                    <select id="excludeId" value={excludeId !== null ? excludeId : ""} onChange={handleExcludeIdChange}>
                        <option value="">Ninguna</option>
                        {availableOptions.map(d => (
                            <option key={d.id} value={d.id}>
                                {d.option}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleExcludePrize}>
                        Excluir Arma
                    </button>
                    <button onClick={resetExcludedPrizes}>
                        Reiniciar Exclusiones
                    </button>
                </div>
            )}
        </div>
    );
}



/* eslint-enable */

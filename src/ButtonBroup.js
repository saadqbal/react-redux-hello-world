import React from 'react';
import { setTechnology } from './actions';
import { store } from './store';

const dispatchBtnAction = (e) => {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
}

const ButtonGroup = ({ technologies }) => (
    <div>
        {
            technologies.map((tech, i) => (
                <button key={`btn-${i}`} data-tech={tech} className='hello-btn' onClick={dispatchBtnAction}>
                    {tech}
                </button>
            ))
        }
    </div>
);


export default ButtonGroup;
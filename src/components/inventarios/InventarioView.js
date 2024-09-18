import React, { useEffect, useState } from "react"
import { getInventarios } from "../../services/inventarioService"
import { InventarioCard } from "./InventarioCard"

export const InventarioView = () => {
  
  const [inventarios, setInventarios ] = useState([])

  const listarInventarios = async () => {
    try {
      const { data } = await getInventarios();
      console.log(data);
      setInventarios(data);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarInventarios();
  }, []);

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
          inventarios.map((inventario) => {
            return <InventarioCard key = { inventario._id} inventario = {inventario} />
          })
        }
      </div>
      <button className="btn btn-primary agr">
      <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}


import React, { Component } from 'react';
import Header from './Header.js';
import DaftarMakanan from '../Lib/DaftarMakanan.js';

class Menumakanan extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h3>Daftar Makanan Favorit</h3>
        <table style={{width:"100%"}}>
          <tbody>
            <tr>
              {
                DaftarMakanan.map((value,index) => {
                  return (
                    <td key={index}>
                      <center>
                        <img src={value.gambar} alt="Gambar Makanan" Width="150" height="100"/>
                        <p>{value.nama}</p>
                        <p>{value.harga}</p>
                      </center>
                    </td>
                  );
                })
              }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Menumakanan;

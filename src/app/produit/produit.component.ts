import { Component, OnInit } from '@angular/core';
import {Produit} from '../shared/Produit';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  designation = "";
  lePrix = "";
  produit:Produit;
  produits : Produit[] = [];
  remplit : boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  ajouterProduit(){
    this.remplit = true ;
    this.produit = new Produit();
    this.produit.designation = this.designation;
    this.produit.prix = this.lePrix;

    this.produits.push(this.produit);
    
  }
}

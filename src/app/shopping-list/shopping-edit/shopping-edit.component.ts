import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameElementRef: ElementRef;
  @ViewChild("amountInput") amountElementRef: ElementRef;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    const ingName = this.nameElementRef.nativeElement.value;
    const ingAmount = this.amountElementRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }
}

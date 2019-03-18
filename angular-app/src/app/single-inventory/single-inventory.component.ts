import { Component, OnInit, Input } from '@angular/core';
import { Inventory } from '../inventory';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute } from '@angular/router';
import { AddItemFormComponent } from '../add-item-form/add-item-form.component';
import { AddPersonComponent } from '../add-person/add-person.component';

@Component({
  selector: 'app-single-inventory',
  templateUrl: './single-inventory.component.html',
  styleUrls: ['./single-inventory.component.css']
})
export class SingleInventoryComponent implements OnInit {

  // name of inventory
  id: number;

  // local copy of inventory contents
  thisInv: Inventory;

  // This is the form that we will use to add items to an inventory
  addItemForm: AddItemFormComponent;

  // ActivatedRoute for query params
  // GetInventoryService for mock data
  constructor(private route: ActivatedRoute, private data: InventoryService, private modal: NgbModal) { }

  ngOnInit() {

    // getting the name of the inventory to display
    this.route.paramMap.subscribe(params => {

      this.id = Number.parseFloat(params.get(`id`));
      // fetch all inventories
      this.data.getInventories().subscribe(data => {

        // for every inventory
        for (const inv of data) {
          if (inv.id === this.id) {
            console.log(inv.id + " " + this.id);
            // found the inventory
            // TODO: else case in case inv not found
            this.thisInv = new Inventory(inv);
            break;
          }
        }
      });
    });
  }

  // Opens up the add item form modal
  openAddItemForm(): void {
    const openModal = this.modal.open(AddItemFormComponent, {size: 'lg'});
    // Passes inventory onto the add item config so they can be added to the correct inv
    openModal.componentInstance.inv = this.thisInv;
  }

  // Opens up the add person form modal
  addPerson(): void {
    const openModal = this.modal.open(AddPersonComponent, { size: 'lg' });
  }
}

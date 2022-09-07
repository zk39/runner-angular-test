import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

import { map, Observable, startWith } from 'rxjs';
import { titles } from '../data/titles';
import { ITitle } from '../model/ITitle';

@Component({
  selector: 'app-typehead-input',
  templateUrl: './typehead-input.component.html',
  styleUrls: ['./typehead-input.component.css'],
})
export class TypeheadInputComponent implements OnInit {
  userInput: any;
  tempTitles: ITitle[] = titles;
  savedTitles: ITitle[] = [];
  searchForm = new FormControl();
  options!: Observable<any[]>;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.options = this.searchForm.valueChanges.pipe(
      map((val) => {
        return this.tempTitles.filter(
          (option) =>
            option.name.toLowerCase().includes(val.toLowerCase()) &&
            val.length >= 3
        );
      })
    );
  }
  filterVal(arg0: string): any {
    if (arg0) {
      return this.tempTitles.filter((option) =>
        option.name.toLowerCase().includes(arg0.toLowerCase())
      );
    }
  }
  onClick(e: any, arg0: string) {
    if (e.source.selected) {
      this.save(arg0);
    }
  }
  save(arg0: string) {
    this.tempTitles.forEach((x) => {
      if (x.name == arg0) this.savedTitles.push(x);
      console.log("saveTitle 's length " + x);
    });
  }

  remove(fruit: string, index: number): void {
    if (index >= 0) {
      this.savedTitles.splice(index, 1);
    }
  }
}

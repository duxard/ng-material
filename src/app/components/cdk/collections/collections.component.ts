import {Component, OnDestroy, OnInit} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

type Item = {
  name: string;
  id: number;
};

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit, OnDestroy {
  private readonly done$: Subject<void> = new Subject<void>();

  items: Item[] = [
    { name: 'Item1', id: 1 },
    { name: 'Item2', id: 2 },
    { name: 'Item3', id: 3 },
    { name: 'Item4', id: 4 }
  ];
  selection = new SelectionModel<Item>(true, []);

  constructor() { }

  ngOnInit(): void {
    this.selection.changed.pipe(
      takeUntil(this.done$)
    ).subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.done$.next();
  }
}

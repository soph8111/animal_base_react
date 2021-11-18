export default function Thead() {
  return (
    <thead>
      <tr id="sorting">
        <th data-action="sort" data-sort-direction="asc" data-sort="winner">
          Winner
        </th>
        <th data-action="sort" data-sort-direction="asc" data-sort="star">
          Star
        </th>
        <th data-action="sort" data-sort-direction="asc" data-sort="name">
          Name
        </th>
        <th data-action="sort" data-sort-direction="asc" data-sort="type">
          Type
        </th>
        <th data-action="sort" data-sort-direction="asc" data-sort="desc">
          Description
        </th>
        <th data-action="sort" data-sort-direction="asc" data-sort="age">
          Age
        </th>
      </tr>
    </thead>
  );
}

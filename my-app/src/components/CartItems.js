import Items from "./Items";

return (
    <>
    <Items.Image size='tiny' src={Props.item.media.source} />
    <Items.Content verticalAlign='middle'>
        <Items.Header>{Props.item.name}</Items.Header>
        <Items.Meta><span>{props.item.variants[0].option_name}</span></Items.Meta>

        <div className='quanity-group'>
            <Button
            negative
            className='quan-buttons'><Icon name='minus' /></Button>
            <Input
            className='input-quantity'
            value={props.item.quantity}
            />
            <Button
            positive
            className='quan-buttons'
            >
                <Icon name='plus' />
            </Button>
        </div>
        <Items.Extra className='item-total'>
            <Header floated='right'>${props.item.line_total.formatted_with_symbol}</Header>
        </Items.Extra>
    </Items.Content>
    </>
);

//It was either make this or do actual work.

function CalendarFacts(){
    var events = [];
    var problems = [];
    var reasons = [];
    var consequences = [];
    function generate_plurality(initial_string,options1,middle_string,options2,final_string){
        if(!initial_string){
            initial_string = '';
        }
        if(!middle_string){
            if(options2){
                middle_string = ' ';
            }else{
                middle_string = '';
            }

        }
        if(!final_string){
            final_string = '';
        }
        var plurality = [];
        for(var o1 = 0; o1 < options1.length; o1++){
            if(options2){
                for(var o2 = 0; o2 < options2.length; o2++){
                    plurality.push(initial_string+options1[o1]+middle_string+options2[o2]+final_string);
                }
            }else{
                plurality.push(initial_string+options1[o1]+middle_string+final_string);
            }
        }
        return plurality;
    }
    function init_events(){
        events.push('Easter','Toyota Truck Month','Shark Week');
        events = events.concat(
            generate_plurality('the ',['fall','spring'],' equinox'),
            generate_plurality('the ',['summer','winter'],false,['solstice','olympics']),
            generate_plurality('daylight ',['saving','savings'],' time'),
            generate_plurality('leap ',['day','year']),
            generate_plurality('the ',['harvest','super','blood'],' moon')
        );
    }
    function init_problems(){
        problems = problems.concat(
            generate_plurality('happens ',['earlier','later','at the wrong time'],' every year'),
            generate_plurality('drifts out of sync with the ',
                ['sun','moon','Zodiac','atomic clock in Colorado'].concat(generate_plurality(
                    false,['Gregorian','Mayan','Lunar','iPhone'],' calendar'
                ))),
            generate_plurality('might ',['not happen','happen twice'],' this year')
        );
    }
    function init_reasons(){
        reasons.push('a decree by the Pope in the 1500s','magnetic field reversal');
        reasons = reasons.concat(
            generate_plurality('time zone legislation in ',['Indiana','Arizona','Russia']),
            generate_plurality(false,
                ['precession','libration','nuation','libation','eccentricity','obliquity'],
                ' of the ',
                ['moon','sun',"Earth`s axis",'equator','prime meridian'].concat(
                    generate_plurality(false,['international date','Mason-Dixon'],' line')
                )),
            generate_plurality('an arbitrary decision by ',['Benjamin Franklin','Isaac Newton','FDR'])
        );
    }
    function init_consequences(){
        consequences.push(
            'it causes a predictable increase in car accidents',
            'that`s why we have leap seconds',
            'scientists are really worried',
            'it`s getting worse and no one knows why');
        consequences = consequences.concat(
            generate_plurality('it was even more extreme during the ',['Bronze Age','Ice Age','Cretaceous','1990s']),
            generate_plurality('there`s a proposal to fix it, but it ',['will never happen','actually makes things worse','is stalled in Congress','might be unconstitutional']),
        );
    }
    function get_random_element(array){
        return array[Math.min(Math.floor(array.length * Math.random()),array.length-1)];
    }
    function get_event(){
        return get_random_element(events);
    }
    function get_problem() {
        return get_random_element(problems);
    }
    function get_reason(){
        return get_random_element(reasons);
    }
    function get_consequence(){
        return get_random_element(consequences);
    }
    function generate_fact(){
        return 'Did you know that '+get_event()+' '+get_problem()+' because of '+get_reason()+'? Apparently '+get_consequence()+'.';
    }
    init_events();
    init_problems();
    init_reasons();
    init_consequences();
    return {
        generate: generate_fact
    }
}

var C = new CalendarFacts();
console.log(C.generate());